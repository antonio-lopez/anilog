/* eslint-disable import/no-anonymous-default-export */
import Hero from './Hero';

export default {
  title: 'Main/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = () => <Hero />;
