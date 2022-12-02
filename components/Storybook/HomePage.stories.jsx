/* eslint-disable import/no-anonymous-default-export */
import { Primary as Layout } from '../Layout/Layout.stories';
import Hero from '../Hero';
import { Page as SeasonSection } from './Sections/HomeSeasonSection.stories';
import { Page as TopSection } from './Sections/HomeTopSection.stories';
import { Page as MovieSection } from './Sections/HomeMovieSection.stories';
import { Page as HomeTrendingSection } from './Sections/HomeTrendingSection.stories';

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
    <div className='layout'>
      <SeasonSection {...SeasonSection.args} />
      <TopSection {...TopSection.args} />
      <HomeTrendingSection {...HomeTrendingSection.args} />
      <MovieSection {...MovieSection.args} />
    </div>
  </Layout>
);
