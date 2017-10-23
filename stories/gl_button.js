import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import glButton from '../components/gl_button';

storiesOf('Button', module)
  .add('with text', () => ({
    components: { glButton },
    template: `
      <div>
        <h2>Primary Button</h2>
        <gl-button class="btn-primary" @click="action">Primary Button</gl-button>

        <h2>Default Button</h2>
        <gl-button class="btn-default" @click="action">Secondary Button</gl-button>
      </div>
    `,
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { glButton },
    template: '<gl-button @click="action">😀 😎 👍 💯</gl-button>',
    methods: { action: linkTo('clicked') },
  }));
