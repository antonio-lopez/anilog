/* eslint-disable import/no-anonymous-default-export */
import { Primary as AllSectionTitle } from '../Title/AllSectionTitle.stories';
import { Primary as AnimeViewAllCard } from '../Card/AnimeViewAll/AnimeViewAllCard.stories';
import { Primary as Layout } from '../Layout/Layout.stories';

export default {
  title: 'Complete/ViewAllAnimePage',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Page = () => (
  <Layout {...Layout.args}>
    <div className='layout'>
      <AllSectionTitle {...AllSectionTitle.args} />
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
        <AnimeViewAllCard {...AnimeViewAllCard.args} />
        <AnimeViewAllCard {...AnimeViewAllCard.args} />
        <AnimeViewAllCard {...AnimeViewAllCard.args} />
        <AnimeViewAllCard {...AnimeViewAllCard.args} />
        <AnimeViewAllCard {...AnimeViewAllCard.args} />
        <AnimeViewAllCard {...AnimeViewAllCard.args} />
      </div>
    </div>
  </Layout>
);
