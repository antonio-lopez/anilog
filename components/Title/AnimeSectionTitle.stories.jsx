/* eslint-disable import/no-anonymous-default-export */
import AnimeSectionTitle from './AnimeSectionTitle';

export default {
  title: 'Title/AnimeSectionTitle',
  component: AnimeSectionTitle,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AnimeSectionTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = { title: 'Characters' };
