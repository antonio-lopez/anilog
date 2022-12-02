/* eslint-disable import/no-anonymous-default-export */
import { Primary as Title } from '../../Title/AnimeSectionTitle.stories';
import { Primary as HomeTrendingCardPrimary } from '../../Card/AnimeHome/HomeTrendingCardPrimary.stories';
import { Primary as HomeTrendingCardSecondary } from '../../Card/AnimeHome/HomeTrendingCardSecondary.stories';

export default {
  title: 'Complete/AnimeHome/HomeTrendingSection',
  component: Page,
};

export const Page = () => (
  <section>
    <Title title='Top Anime' />
    <div className='grid grid-cols-1 gap-4 rounded-xl bg-eerieBlack p-4 lg:grid-cols-2'>
      <HomeTrendingCardPrimary {...HomeTrendingCardPrimary.args} />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1'>
        <HomeTrendingCardSecondary {...HomeTrendingCardSecondary.args} />
        <HomeTrendingCardSecondary {...HomeTrendingCardSecondary.args} />
        <HomeTrendingCardSecondary {...HomeTrendingCardSecondary.args} />
        <HomeTrendingCardSecondary {...HomeTrendingCardSecondary.args} />
      </div>
    </div>
  </section>
);
