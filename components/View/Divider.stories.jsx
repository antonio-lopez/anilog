/* eslint-disable import/no-anonymous-default-export */
import Divider from './Divider';

export default {
  title: 'View/Divider',
  component: Divider,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = () => <Divider />;
