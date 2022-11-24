/* eslint-disable import/no-anonymous-default-export */
import AnimeCharacterSection from './AnimeCharacterSection';

export default {
  title: 'Complete/AnimeDetails/AnimeCharacterSection',
  component: AnimeCharacterSection,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AnimeCharacterSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/kaguya.png',
  alt: 'character profile',
  fullName: 'Kaguya Shinomiya',
  role: 'MAIN',
};
