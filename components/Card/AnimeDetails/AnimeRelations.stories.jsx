/* eslint-disable import/no-anonymous-default-export */
import AnimeRelations from './AnimeRelations';

export default {
  title: 'Card/Anime/AnimeRelations',
  component: AnimeRelations,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AnimeRelations {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-main.png',
  alt: 'anime cover',
  title: 'Kaguya-sama: Love is War?',
  relationshipType: 'ADAPTATION',
  type: 'MANGA',
};
