import PopoverBasicExample from './popover.basic.example.vue';
import PopoverCloseExample from './popover.showclose.example.vue';
import PopoverLoadingExample from './popover.loading.example.vue';
import PopoverNoTitleExample from './popover.notitle.example.vue';
import PopoverNoTitleCloseExample from './popover.notitle-close.example.vue';

export default [
  {
    name: 'Examples',
    items: [
      {
        id: 'popover-basic',
        name: 'Basic',
        description: 'Basic Popover',
        component: PopoverBasicExample,
      },
      {
        id: 'popover-close',
        name: 'Basic with close button',
        description: 'Basic Popover with close button',
        component: PopoverCloseExample,
      },
      {
        id: 'popover-loading',
        name: 'Loading',
        description: 'Popover with Skeleton Loading',
        component: PopoverLoadingExample,
      },
      {
        id: 'popover-no-title',
        name: 'No title',
        description: 'Popover with no title',
        component: PopoverNoTitleExample,
      },
      {
        id: 'popover-no-title-close',
        name: 'No title with close button',
        description: 'Popover with no title and close button',
        component: PopoverNoTitleCloseExample,
      },
    ],
  },
];
