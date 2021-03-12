import component from './table.basic.example.vue';
import componentCustomFields from './table.custom_fields.example.vue';
import componentSortable from './table.sortable.example.vue';

export default [
  {
    name: 'Basic',
    items: [
      {
        id: 'table-basic',
        name: 'Basic',
        description: 'Basic Table',
        component,
      },
      {
        id: 'table-custom-fields',
        name: 'Custom Fields',
        description: 'Custom component fields',
        component: componentCustomFields,
      },
      {
        id: 'table-sortable',
        name: 'Sortable table',
        description: 'Sortable table columns',
        component: componentSortable,
      },
    ],
  },
];
