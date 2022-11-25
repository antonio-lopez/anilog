/* eslint-disable import/no-anonymous-default-export */
import HomeTopSection from './HomeTopSection';

export default {
  title: 'Complete/AnimeHome/HomeTopSection',
  component: HomeTopSection,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <HomeTopSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-main.png',
  alt: 'anime cover',
  title: 'Kaguya-sama: Love is War?',
  percentage: '90',
};
