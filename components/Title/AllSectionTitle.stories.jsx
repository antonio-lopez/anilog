/* eslint-disable import/no-anonymous-default-export */
import AllSectionTitle from './AllSectionTitle';

export default {
  title: 'Title/AllSectionTitle',
  component: AllSectionTitle,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AllSectionTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = { title: 'Fall 2022 Anime' };
