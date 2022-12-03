/* eslint-disable import/no-anonymous-default-export */
import HomeSeasonCardSecondary from './HomeSeasonCardSecondary';

export default {
  title: 'Card/Home/HomeSeasonCardSecondary',
  component: HomeSeasonCardSecondary,
};

const Template = (args) => <HomeSeasonCardSecondary {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-main.png',
  alt: 'anime cover',
  title: 'Kaguya-sama: Love is War?',
  studio: 'A-1 Pictures',
  averageScore: 90,
  description:
    "After a slow but eventful summer vacation, Shuchiin Academy's second term is now starting in full force. As August transitions...",
};
