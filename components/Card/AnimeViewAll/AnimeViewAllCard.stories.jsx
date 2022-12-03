/* eslint-disable import/no-anonymous-default-export */
import AnimeViewAllCard from './AnimeViewAllCard';

export default {
  title: 'Card/AnimeViewAll/AnimeViewAllCard',
  component: AnimeViewAllCard,
};

const Template = (args) => <AnimeViewAllCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-main.png',
  alt: 'anime cover',
  title: 'Kaguya-sama: Love is War -Ultra Romantic-',
  studios: 'A-1 Pictures',
  description:
    "The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends.",
  format: 'TV',
  episodes: 13,
  season: 'SPRING',
  seasonYear: 2022,
  averageScore: 90,
  genres: ['Comedy', 'Psychological', 'Romance', 'Slice of Life'],
};
