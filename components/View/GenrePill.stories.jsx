/* eslint-disable import/no-anonymous-default-export */
import GenrePill from './GenrePill';

export default {
  title: 'View/GenrePill',
  component: GenrePill,
};

const Template = (args) => <GenrePill {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  genres: ['Comedy', 'Psychological', 'Romance', 'Slice of Life'],
};
