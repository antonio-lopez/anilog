/* eslint-disable import/no-anonymous-default-export */
import Navbar from './Navbar';

export default {
  title: 'Layout/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = () => <Navbar />;
