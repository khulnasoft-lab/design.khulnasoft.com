<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Punctuation</h1>
      <h2>Case</h2>
      <p>Use sentence case for titles, headings, labels, menu items, and buttons. Use title case when referring to <a href="https://about.gitlab.com/features/">features</a> or <a href="https://about.gitlab.com/products/">products</a>. Note that some features are also objects (e.g. “Merge Requests” and “merge requests”).</p>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Add issues to the Issue Board feature in GitLab Hosted.</td>
            <td>Add Issues to the Issue Board Feature in GitLab Hosted.</td>
          </tr>
        </tbody>
      </table>
      <h2>Periods</h2>
      <p>The period signals to a speaker or reader that the sentence has come to an end. They assist users in visually breaking up content and should be used appropriately.</p>
      <ul>
        <li>Place periods after sentences followed by a link.</li>
        <li>Skip periods after solo sentences of body text</li>
        <li>Don’t place periods after a link if it‘s not followed by a sentence.</li>
        <li>Use a period after every bullet point that is a sentence.</li>
        <li>Use a period after every bullet point that completes the introductory stem.</li>
        <li>Use no punctuation after bullets that are not sentences and do not complete the stem.</li>
        <li>Use all sentences or all fragments in a bulleted list, not a mixture.</li>
      </ul>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Mention someone to notify them. <a href="#">Learn more</a></p>
            </td>
            <td>
              <p>Mention someone to notify them. <a href="#">Learn more.</a></p>
            </td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>This is a list item sentence.</li>
                <li>This is a full sentence, so it needs a period.</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>This is a list item sentence</li>
                <li>This is a full sentence, so it needs a period</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>This is an introductory stem:</p>
              <ul>
                 <li>This sentence completes the introductory stem.</li>
                <li>This sentence completes the introductory stem.</li>
              </ul>
            </td>
            <td>
              <p>This is an introductory stem:</p>
              <ul>
                 <li>This sentence completes the introductory stem</li>
                <li>This sentence completes the introductory stem</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>These are just words in a list:</p>
              <ul>
                <li>One item</li>
                <li>Two item</li>
              </ul>
            </td>
            <td>
              <p>These are just words in a list:</p>
              <ul>
                <li>One item.</li>
                <li>Two item.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Consistency is key here.</li>
                <li>Don't mix sentences and individual items in a list.</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Consistency is key here.</li>
                <li>Item</li>
                <li>Don't mix sentences and individual items in a list.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Contractions</h2>
      <p>We encourage the use of contractions to make writing simpler and easier to read. However, don’t make a sentence harder to understand just to follow this rule. For example, “do not” can give more emphasis than “don’t” when needed.</p>
       <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>it’s, can’t, wouldn’t, you’re, you’ve, haven’t, don’t</p>
            </td>
            <td>
              <p>it is, cannot, would not, it’ll, should’ve</p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Numbers</h2>
      <p>Use “1, 2, 3” instead of “one, two, three” for numbers. One exception is when mixing uses of numbers, such as “Enter two 3s.”</p>
       <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>3 new commits</p>
            </td>
            <td>
              <p>Three new commits</p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Punctuation</h2>
      <p>Use punctuation to add clarity or be grammatically correct.</p>
      <table>
        <thead>
          <tr>
            <th>Punctuation mark</th>
            <th>Copy and paste</th>
            <th>HTML entity</th>
            <th>Unicode</th>
            <th>Mac shortcut</th>
            <th>Windows shortcut</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Period</td>
            <td><strong>.</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Use in lists or modals with full and multiple sentences, and any sentence followed by a link or inline code.<br><br>Place inside quotation marks unless you’re telling the reader what to enter and it’s ambiguous whether to include the period.</td>
          </tr>
          <tr>
            <td>Comma</td>
            <td><strong>,</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Place inside quotation marks.<br><br>Use a <a href="https://en.wikipedia.org/wiki/Serial_comma" title="“Serial comma” in Wikipedia">serial comma</a> in lists of three or more terms.</td>
          </tr>
          <tr>
            <td>Exclamation point</td>
            <td><strong>!</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Avoid exclamation points as they tend to come across as shouting. Some exceptions include greetings or congratulatory messages.</td>
          </tr>
          <tr>
            <td>Colon</td>
            <td><strong>:</strong></td>
            <td><code>&amp;#58;</code></td>
            <td><code>\u003A</code></td>
            <td></td>
            <td></td>
            <td>Omit from labels, for example, in the labels for fields in a form.</td>
          </tr>
          <tr>
            <td>Apostrophe</td>
            <td><strong>’</strong></td>
            <td><code>&amp;rsquo;</code></td>
            <td><code>\u2019</code></td>
            <td>
              <kbd>⌥ Option</kbd>+<kbd>⇧ Shift</kbd>+<kbd>]</kbd>
            </td>
            <td>
              <kbd>Alt</kbd>+<kbd>0 1 4 6</kbd>
            </td>
            <td>Use for contractions (I’m, you’re, ’89) and to show possession.<br><br>To show possession, add an <em>’s</em> to all singular common nouns and names, even if they already end in an <em>s</em>: “Look into this worker process’s log.” For singular proper names ending in <em>s</em>, use only an apostrophe: “James’ commits.” For plurals of a single letter, add an <em>’s</em>: “Dot your i’s and cross your t’s.”<br><br>Omit for decades or acronyms: “the 1990s”, “MRs.”</td>
          </tr>
          <tr>
            <td>Quotation marks</td>
            <td>
              <strong>“</strong><br><br><strong>”</strong><br><br><strong>‘</strong><br><br><strong>’</strong>
            </td>
            <td>
              <code>&amp;ldquo;</code><br><br><code>&amp;rdquo;</code><br><br><code>&amp;lsquo;</code><br><br><code>&amp;rsquo;</code>
            </td>
            <td>
              <code>\u201C</code><br><br><code>\u201D</code><br><br><code>\u2018</code><br><br><code>\u2019</code>
            </td>
            <td>
              <kbd>⌥ Option</kbd>+<kbd>[</kbd><br><br><kbd>⌥ Option</kbd>+<kbd>⇧ Shift</kbd>+<kbd>[</kbd><br><br><kbd>⌥ Option</kbd>+<kbd>]</kbd><br><br><kbd>⌥ Option</kbd>+<kbd>⇧ Shift</kbd>+<kbd>]</kbd>
            </td>
            <td>
              <kbd>Alt</kbd>+<kbd>0 1 4 7</kbd><br><br><kbd>Alt</kbd>+<kbd>0 1 4 8</kbd><br><br><kbd>Alt</kbd>+<kbd>0 1 4 5</kbd><br><br><kbd>Alt</kbd>+<kbd>0 1 4 6</kbd>
            </td>
            <td>Use proper quotation marks (also known as smart quotes, curly quotes, or typographer’s quotes) for quotes. Single quotation marks are used for quotes inside of quotes.<br><br>The right single quotation mark symbol is also used for apostrophes.<br><br>Don’t use primes, straight quotes, or free-standing accents for quotation marks.</td>
          </tr>
          <tr>
            <td>Primes</td>
            <td>
              <strong>′</strong><br><br><strong>″</strong>
            </td>
            <td>
              <code>&amp;prime;</code><br><br><code>&amp;Prime;</code>
            </td>
            <td>
              <code>\u2032</code><br><br><code>\u2033</code>
            </td>
            <td></td>
            <td>
              <kbd>Alt</kbd>+<kbd>8 2 4 2</kbd><br><br><kbd>Alt</kbd>+<kbd>8 2 4 3</kbd>
            </td>
            <td>Use prime (′) only in abbreviations for feet, arcminutes, and minutes: 3° 15′<br><br>Use double-prime (″) only in abbreviations for inches, arcseconds, and seconds: 3° 15′ 35″<br><br>Don’t use quotation marks, straight quotes, or free-standing accents for primes.</td>
          </tr>
          <tr>
            <td>Straight quotes and accents</td>
            <td>
              <strong>"</strong><br><br><strong>'</strong><br><br><strong>`</strong><br><br><strong>´</strong>
            </td>
            <td>
              <code>&amp;quot;</code><br><br><code>&amp;#39;</code><br><br><code>&amp;#96;</code><br><br><code>&amp;acute;</code>
            </td>
            <td>
              <code>\u0022</code><br><br><code>\u0027</code><br><br><code>\u0060</code><br><br><code>\u00B4</code>
            </td>
            <td></td>
            <td></td>
            <td>Don’t use straight quotes or free-standing accents for primes or quotation marks.<br><br>Proper typography never uses straight quotes. They are left over from the age of typewriters and their only modern use is for code.</td>
          </tr>
          <tr>
            <td>Ellipsis</td>
            <td><strong>…</strong></td>
            <td><code>&amp;hellip;</code></td>
            <td></td>
            <td>
              <kbd>⌥ Option</kbd>+<kbd>;</kbd>
            </td>
            <td>
              <kbd>Alt</kbd>+<kbd>0 1 3 3</kbd>
            </td>
            <td>Use to indicate an action in progress (“Downloading…”) or incomplete or truncated text. No space before the ellipsis.<br><br>Omit from menu items or buttons that open a modal or start some other process.</td>
          </tr>
          <tr>
            <td>Chevrons</td>
            <td>
            <strong>«</strong><br><br><strong>»</strong><br><br><strong>‹</strong><br><br><strong>›</strong><br><br><strong>&lt;</strong><br><br><strong>&gt;</strong>
            </td>
            <td>
              <code>&amp;#171;</code><br><br><code>&amp;#187;</code><br><br><code>&amp;#8249;</code><br><br><code>&amp;#8250;</code><br><br><code>&amp;lt;</code><br><br><code>&amp;gt;</code>
            </td>
            <td>
              <code>\u00AB</code><br><br><code>\u00BB</code><br><br><code>\u2039</code><br><br><code>\u203A</code><br><br><code>\u003C</code><br><br><code>\u003E</code><br><br>
            </td>
            <td></td>
            <td></td>
            <td>Omit from links or buttons that open another page or move to the next or previous step in a process. Also known as angle brackets, angular quote brackets, or guillemets.</td>
          </tr>
          <tr>
            <td>Em dash</td>
            <td><strong>—</strong></td>
            <td><code>&amp;mdash;</code></td>
            <td><code>\u2014</code></td>
            <td>
              <kbd>⌥ Option</kbd>+<kbd>⇧ Shift</kbd>+<kbd>-</kbd>
            </td>
            <td>
              <kbd>Alt</kbd>+<kbd>0 1 5 1</kbd>
            </td>
            <td>Avoid using dashes to separate text. If you must use dashes for this purpose — like this — use an em dash surrounded by spaces.</td>
          </tr>
          <tr>
            <td>En dash</td>
            <td><strong>–</strong></td>
            <td><code>&amp;ndash;</code></td>
            <td><code>\u2013</code></td>
            <td>
              <kbd>⌥ Option</kbd>+<kbd>-</kbd>
            </td>
            <td>
              <kbd>Alt</kbd>+<kbd>0 1 5 0</kbd>
            </td>
            <td>Use an en dash without spaces instead of a hyphen to indicate a range of values, such as numbers, times, and dates: “3–5 kg”, “8:00 AM–12:30 PM”, “10–17 Jan”</td>
          </tr>
          <tr>
            <td>Hyphen</td>
            <td><strong>-</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Use to represent negative numbers, or to avoid ambiguity in adjective-noun or noun-participle pairs. Example: “anti-inflammatory”; “5-mile walk.”<br><br>Omit in commonly understood terms and adverbs that end in <em>ly</em>: “frontend”, “greatly improved performance.”<br><br>Omit in the term “open source.”</td>
          </tr>
          <tr>
            <td>Parentheses</td>
            <td><strong>( )</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Use only to define acronyms or jargon: “Secure web connections are based on a technology called SSL (the secure sockets layer).”<br><br>Avoid other uses and instead rewrite the text, or use dashes or commas to set off the information. If parentheses are required: If the parenthetical is a complete, independent sentence, place the period inside the parentheses; if not, the period goes outside.</td>
          </tr>
        </tbody>
      </table>
      <p>When using the Alt keystrokes in Windows, use the numeric keypad, not the row of numbers above the alphabet, and be sure Num Lock is turned on.</p>
    </div>
  </div>
</template>


