/* eslint-disable import/no-anonymous-default-export */
import HomeTopCard from './HomeTopCard';

export default {
  title: 'Card/HomeTopCard',
  component: HomeTopCard,
};

const Template = (args) => <HomeTopCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-main.png',
  alt: 'anime cover',
  title: 'Kaguya-sama: Love is War?',
  percentage: '90',
};