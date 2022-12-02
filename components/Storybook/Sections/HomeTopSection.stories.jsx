/* eslint-disable import/no-anonymous-default-export */
import { Primary as Title } from '../../Title/AnimeSectionTitle.stories';
import { Primary as HomeTopCard } from '../../Card/AnimeHome/HomeTopCard.stories';

export default {
  title: 'Complete/AnimeHome/HomeTopSection',
  component: Page,
};

export const Page = () => (
  <section>
    <Title title='Top Anime' />
    <div className='grid grid-cols-2 justify-items-center gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-0'>
      <HomeTopCard {...HomeTopCard.args} />
      <HomeTopCard {...HomeTopCard.args} />
      <HomeTopCard {...HomeTopCard.args} />
      <HomeTopCard {...HomeTopCard.args} />
      <HomeTopCard {...HomeTopCard.args} />
    </div>
  </section>
);
