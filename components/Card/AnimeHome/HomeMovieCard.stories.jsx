/* eslint-disable import/no-anonymous-default-export */
import HomeMovieCard from './HomeMovieCard';

export default {
  title: 'Card/Home/HomeMovieCard',
  component: HomeMovieCard,
};

const Template = (args) => <HomeMovieCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-cover.jpg',
  alt: 'anime cover',
  title: 'Kaguya-sama: Love is War?',
  studio: 'A-1 Pictures',
};
