/* eslint-disable import/no-anonymous-default-export */
import SectionTitle from './SectionTitle';

export default {
  title: 'Title/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <SectionTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = { title: 'Current Season' };
