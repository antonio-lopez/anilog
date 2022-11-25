/* eslint-disable import/no-anonymous-default-export */
import HomeMovieSection from './HomeMovieSection';

export default {
  title: 'Complete/AnimeHome/HomeMovieSection',
  component: HomeMovieSection,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <HomeMovieSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-cover.jpg',
  alt: 'anime cover',
  title: 'Kaguya-sama: Love is War?',
  studio: 'A-1 Pictures',
};
