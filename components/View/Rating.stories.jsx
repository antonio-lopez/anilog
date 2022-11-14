/* eslint-disable import/no-anonymous-default-export */
import Rating from './Rating';

export default {
  title: 'View/Rating',
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = { percentage: '90' };
