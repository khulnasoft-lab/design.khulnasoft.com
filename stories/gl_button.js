import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import glButton from '../components/gl_button';

function substories(components, substoryDefinitions) {
  return {
    components,
    computed: {
      code() {
        return substoryDefinitions.map(definition => definition.template);
      }
    },
    template: '<div>' +
      substoryDefinitions.map((definition, index) => `
        <h2 id="${definition.title}">${definition.title}</h2>
        <p>${definition.description}</p>
        ${definition.template}
        <pre>{{ code[${index}] }}</pre>
      `).join('\n') +
      '</div>',
  }
}

storiesOf('Components', module)
  .add('Button', () => substories({
      glButton,
    }, [
    {
      title: 'Default (Vue.js)',
      description: 'Just some buttons',
      template: `
        <gl-button buttonClass="btn-primary">Primary Button</gl-button>
        <gl-button buttonClass="btn-default">Secondary Button</gl-button>
      `,
    },
    {
      title: 'Small (Vue.js)',
      description: 'Smaller buttons',
      template: `
        <gl-button buttonClass="btn-primary btn-sm">Primary Button</gl-button>
        <gl-button buttonClass="btn-default btn-sm">Secondary Button</gl-button>
      `,
    },
    {
      title: 'Default (HTML)',
      description: 'Just some buttons',
      template: `
        <button class="btn btn-primary">Primary Button</button>
        <button class="btn btn-default">Secondary Button</button>
      `,
    },
    {
      title: 'Small (HTML)',
      description: 'Smaller buttons',
      template: `
        <button class="btn btn-primary btn-sm">Primary Button</button>
        <button class="btn btn-default btn-sm">Secondary Button</button>
      `,
    },
  ]));
