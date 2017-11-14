import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

// eslint-disable-next-line no-console
const log = () => console.log('Welcome to storybook!');

const basicPrinciples = {
  name: 'Getting Started',

  props: {
    showApp: {
      type: Function,
      default: log,
    },
  },

  data() {
    return {
      main: {
        margin: 15,
        maxWidth: 600,
        lineHeight: 1.4,
        fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
      },

      logo: {
        width: 200,
      },

      link: {
        color: '#1474f3',
        textDecoration: 'none',
        borderBottom: '1px solid #1474f3',
        paddingBottom: 2,
      },

      code: {
        fontSize: 15,
        fontWeight: 600,
        padding: '2px 5px',
        border: '1px solid #eae9e9',
        borderRadius: 4,
        backgroundColor: '#f3f2f2',
        color: '#3a3a3a',
      },

      note: {
        opacity: 0.5,
      },
    };
  },

  template: `
    <div :style="main">
      <h1>Basic Principles</h1>
    </div>
  `,

  methods: {
    onClick(event) {
      event.preventDefault();
      this.showApp();
    },
  },
};

storiesOf('Getting Started', module).add('Basic Principles', () => ({
  components: { basicPrinciples },
  template: '<basicPrinciples :showApp="action" />',
  methods: { action: linkTo('Button') },
}));
