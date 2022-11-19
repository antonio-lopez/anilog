/* eslint-disable import/no-anonymous-default-export */
import AnimeBanner from './AnimeBanner';

export default {
  title: 'View/AnimeBanner',
  component: AnimeBanner,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AnimeBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-cover.jpg',
  alt: 'anime cover',
};
