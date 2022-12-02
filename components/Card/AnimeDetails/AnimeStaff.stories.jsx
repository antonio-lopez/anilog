/* eslint-disable import/no-anonymous-default-export */
import AnimeStaff from './AnimeStaff';

export default {
  title: 'Card/Anime/AnimeStaff',
  component: AnimeStaff,
};

const Template = (args) => <AnimeStaff {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/staff.png',
  alt: 'anime staff',
  fullName: 'Kaguya Shinomiya',
};
