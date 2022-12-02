/* eslint-disable import/no-anonymous-default-export */
import HomeTrendingCardSecondary from './HomeTrendingCardSecondary';

export default {
  title: 'Card/Home/HomeTrendingCardSecondary',
  component: HomeTrendingCardSecondary,
};

const Template = (args) => <HomeTrendingCardSecondary {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-cover.jpg',
  alt: 'anime cover',
  title: 'Kaguya-sama: Love is War?',
  studio: 'A-1 Pictures',
  percentage: '90',
};
