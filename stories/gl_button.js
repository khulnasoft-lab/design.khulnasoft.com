import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

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
    }, [
    {
      title: 'Default (Vue.js)',
      description: 'Just some buttons',
      template: `
        <b-button variant="primary">Primary Button</b-button>
        <b-button variant="default">Secondary Button</b-button>
      `,
    },
    {
      title: 'Small (Vue.js)',
      description: 'Smaller buttons',
      template: `
        <b-button variant="primary btn-sm">Primary Button</b-button>
        <b-button variant="default btn-sm">Secondary Button</b-button>
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
