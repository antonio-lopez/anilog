/* eslint-disable import/no-anonymous-default-export */
import { Primary as Layout } from '../Layout/Layout.stories';
import Hero from '../Hero';
import { Primary as SeasonSection } from './Sections/HomeSeasonSection.stories';
import { Primary as TopSection } from './Sections/HomeTopSection.stories';
import { Primary as MovieSection } from './Sections/HomeMovieSection.stories';
import TrendingSection from './Sections/HomeTrendingSection';

export default {
  title: 'Complete/HomePage',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Page = () => (
  <Layout {...Layout.args}>
    <Hero />
    <SeasonSection {...SeasonSection.args} />
    <TopSection {...TopSection.args} />
    <TrendingSection />
    <MovieSection {...MovieSection.args} />
  </Layout>
);
