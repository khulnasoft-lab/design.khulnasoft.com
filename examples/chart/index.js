import ChartBasicExample from './chart.basic.example.vue';
import ChartConnectedExample from './chart.connected.example.vue';
import GaugeBasicExample from './gauge.basic.example.vue';

export default [
  {
    name: 'Basic',
    items: [
      {
        id: 'chart-basic',
        name: 'Basic',
        description: 'Basic Chart',
        component: ChartBasicExample,
      },
      {
        id: 'chart-connected',
        name: 'Connected',
        description: 'Connected Charts',
        component: ChartConnectedExample,
      },
      {
        id: 'gauge-basic',
        name: 'Basic',
        description: 'Basic Gauge',
        component: GaugeBasicExample,
      },
    ],
  },
];
