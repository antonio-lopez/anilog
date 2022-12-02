/* eslint-disable import/no-anonymous-default-export */
import HomeTrendingCardPrimary from './HomeTrendingCardPrimary';

export default {
  title: 'Card/Home/HomeTrendingCardPrimary',
  component: HomeTrendingCardPrimary,
};

const Template = (args) => <HomeTrendingCardPrimary {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-cover.jpg',
  alt: 'anime cover',
  title: 'Kaguya-sama: Love is War?',
  studio: 'A-1 Pictures',
  percentage: '90',
  description:
    "After a slow but eventful summer vacation, Shuchiin Academy's second term is now starting in full force. As August transitions into September, Miyuki Shirogane's birthday looms ever closer, leaving Kaguya Shinomiya in a serious predicament as to how to celebrate it. Furthermore, the tenure of the school's 67th student council is coming to an end. Due to the council members being in different classes, the only time Kaguya and Miyuki have to be together will soon disappear, putting all of their cunning plans at risk.",
};
