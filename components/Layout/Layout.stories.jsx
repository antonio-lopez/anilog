/* eslint-disable import/no-anonymous-default-export */
import Layout from './Layout';

export default {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = (args) => <Layout {...args} />;
