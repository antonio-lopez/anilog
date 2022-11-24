/* eslint-disable import/no-anonymous-default-export */
import AnimeRelationsSection from './AnimeRelationsSection';

export default {
  title: 'Complete/AnimeDetails/AnimeRelationsSection',
  component: AnimeRelationsSection,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AnimeRelationsSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-main.png',
  alt: 'anime cover',
  title: 'Kaguya-sama: Love is War?',
  relationshipType: 'ADAPTATION',
  type: 'MANGA',
};
