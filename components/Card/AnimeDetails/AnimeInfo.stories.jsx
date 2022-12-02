/* eslint-disable import/no-anonymous-default-export */
import AnimeInfo from './AnimeInfo';

export default {
  title: 'Complete/AnimeDetails/AnimeInfo',
  component: AnimeInfo,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AnimeInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: {
    romaji: 'Kaguya-sama wa Kokurasetai: Ultra Romantic',
    english: 'Kaguya-sama: Love is War -Ultra Romantic-',
    native: 'かぐや様は告らせたい-ウルトラロマンティック-',
    userPreferred: 'Kaguya-sama wa Kokurasetai: Ultra Romantic',
  },
  studios: [
    'A-1 Pictures',
    'Aniplex',
    'Shueisha',
    'Mainichi Broadcasting System',
    'JR Higashi Nihon Kikaku',
  ],
  format: 'TV',
  episodes: 13,
  duration: 24,
  status: 'FINISHED',
  season: 'SPRING',
  seasonYear: 2022,
  averageScore: 90,
  genres: ['Comedy', 'Psychological', 'Romance', 'Slice of Life'],
};
