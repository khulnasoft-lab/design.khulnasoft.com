import FormGroupBasicExample from './form_group.basic.example.vue';
import FormGroupDescriptionExample from './form_group.description.example.vue';
import FormGroupDisabledExample from './form_group.disabled.example.vue';
import FormGroupHelpTextExample from './form_group.help_text.example.vue';
import FormGroupTextareaExample from './form_group.textarea.example.vue';
import FormGroupValidationExample from './form_group.validation.example.vue';

export default [
  {
    name: 'Form Group',
    items: [
      {
        id: 'form-group',
        name: 'basic example',
        component: FormGroupBasicExample,
      },
      {
        id: 'form-group-description',
        name: 'with description',
        component: FormGroupDescriptionExample,
      },
      {
        id: 'form-group-help-text',
        name: 'with help text',
        component: FormGroupHelpTextExample,
      },
      {
        id: 'form-group-validations',
        name: 'with validations',
        component: FormGroupValidationExample,
      },
      {
        id: 'form-group-disabled',
        name: 'disabled',
        component: FormGroupDisabledExample,
      },
      {
        id: 'form-group-textarea',
        name: 'textarea',
        component: FormGroupTextareaExample,
      },
    ],
  },
];
