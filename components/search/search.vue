<script>
import lunr from 'lunr';
import lunrStemmer from 'lunr-languages/lunr.stemmer.support';
import SearchResult from './search_result.vue';

if (!lunr.stemmerSupport) {
  lunrStemmer(lunr);
}

const INDEX_LANGUAGE = 'en';
const STATUS_SEARCHING = 'STATUS_SEARCHING';
const STATUS_NO_RESULTS = 'STATUS_NO_RESULTS';
const STATUS_ERROR = 'STATUS_ERROR';
const STATUS_MESSAGE = {
  [STATUS_SEARCHING]: 'Searching...',
  [STATUS_NO_RESULTS]: 'No results found',
  [STATUS_ERROR]: 'Could not load search index',
};

export default {
  components: {
    SearchResult,
  },

  data() {
    return {
      statusId: null,
      searchIndex: null,
      searchMeta: null,
      searchText: '',
      searchResults: [],
      resultsVisible: false,
    };
  },
  async fetch() {
    const url = `/_nuxt/search-index/${INDEX_LANGUAGE}.json`;
    const searchJson = await fetch(url).then((res) => {
      if (res.status === 200) {
        return res.json();
      }

      return this.setStatus(STATUS_ERROR);
    });
    this.searchMeta = searchJson.metas || undefined;
    this.searchIndex = lunr.Index.load(searchJson);
  },
  computed: {
    showResults() {
      return this.statusId || this.resultsVisible;
    },
    statusMsg() {
      return STATUS_MESSAGE[this.statusId] || '';
    },
  },
  watch: {
    searchText(searchText) {
      if (!searchText) {
        this.closeResults();
        return;
      }

      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => this.search(searchText), 200);
    },
    showResults(showResults) {
      if (showResults) {
        this.addBodyListener();
      } else {
        this.removeBodyListener();
      }
    },
  },
  methods: {
    addBodyListener() {
      document.body.addEventListener('mousedown', this.bodyListener);
    },
    removeBodyListener() {
      document.body.removeEventListener('mousedown', this.bodyListener);
    },
    bodyListener(event) {
      if (this.$refs.lunr && !this.$refs.lunr.contains(event.target)) {
        this.resultsVisible = false;
      }
    },
    openResults() {
      this.resultsVisible = true;
    },
    closeResults() {
      this.searchText = '';
      this.resultsVisible = false;
      this.removeBodyListener();
      this.clearStatus();
    },
    async search(txt) {
      if (!this.searchIndex) {
        return;
      }

      this.setStatus(STATUS_SEARCHING);

      this.searchResults = this.searchIndex.search(txt);

      if (!this.searchResults?.length) {
        this.setStatus(STATUS_NO_RESULTS);
      } else {
        this.clearStatus();
      }

      this.openResults();
    },
    setStatus(id) {
      this.statusId = id;
    },
    clearStatus() {
      this.statusId = null;
    },
    getResultMeta({ ref }) {
      return this.searchMeta?.[ref];
    },
    getFocusedResult() {
      return this.$refs.results?.querySelector(':focus');
    },
    keyEnter() {
      const el = this.getFocusedResult();
      if (el) {
        el.querySelector('a').click();
        this.closeResults();
      }
    },
    keyUp() {
      if (!this.showResults) {
        return;
      }

      const el = this.getFocusedResult();
      if (!el) {
        return;
      }

      const previousResult = el.parentElement.previousSibling;
      if (previousResult.querySelector) {
        previousResult.querySelector('a').focus();
      } else {
        this.$refs.input.$el.querySelector('input').focus();
      }
    },
    keyDown() {
      if (!this.showResults) {
        return;
      }

      const el = this.getFocusedResult();
      if (!el) {
        this.$refs.results.querySelector(':first-child a')?.focus();
        return;
      }

      const nextResult = el.parentElement.nextSibling?.querySelector('a');
      if (nextResult) {
        nextResult.focus();
      }
    },
  },
};
</script>

<template>
  <div
    ref="lunr"
    class="app-styles"
    style="position: relative"
    @keydown.enter.prevent="keyEnter"
    @keydown.up.prevent="keyUp"
    @keydown.down.prevent="keyDown"
  >
    <div class="gl-p-3 gl-inset-border-b-1-gray-200">
      <gl-search-box-by-type
        ref="input"
        v-model="searchText"
        aria-label="Search"
        aria-haspopup="true"
        :aria-expanded="showResults"
        autocomplete="off"
        spellcheck="false"
      />
    </div>

    <ul v-if="showResults" role="menu" tabindex="-1" class="gl-new-dropdown dropdown-menu show">
      <div class="gl-new-dropdown-inner">
        <div ref="results" class="gl-new-dropdown-contents">
          <gl-dropdown-item v-if="statusMsg">
            {{ statusMsg }}
          </gl-dropdown-item>
          <search-result
            v-for="(result, index) in searchResults"
            :key="result.ref"
            :tab-index="100 + index"
            :meta="getResultMeta(result)"
            @click.prevent="closeResults"
          />
        </div>
      </div>
    </ul>
  </div>
</template>
