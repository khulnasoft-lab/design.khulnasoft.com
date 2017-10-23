/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import '../node_modules/css-framework/dist/main.css';

import MyButton from './MyButton';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: `
      <div>
        <h2>Primary Button</h2>
        <my-button class="btn-primary" @click="action">Primary Button</my-button>

        <h2>Default Button</h2>
        <my-button class="btn-default" @click="action">Secondary Button</my-button>
      </div>
    `,
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: linkTo('clicked') },
  }));

/* eslint-enable react/react-in-jsx-scope */
