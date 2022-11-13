/* eslint-disable import/no-anonymous-default-export */
import Footer from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = () => <Footer />;
