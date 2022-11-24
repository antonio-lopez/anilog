/* eslint-disable import/no-anonymous-default-export */
import AnimeCharacter from './AnimeCharacter';

export default {
  title: 'Card/Anime/AnimeCharacter',
  component: AnimeCharacter,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AnimeCharacter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/kaguya.png',
  alt: 'character profile',
  fullName: 'Kaguya Shinomiya',
  role: 'MAIN',
};
