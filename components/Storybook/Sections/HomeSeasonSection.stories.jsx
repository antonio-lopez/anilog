/* eslint-disable import/no-anonymous-default-export */
import { Primary as Title } from '../../Title/AnimeSectionTitle.stories';
import { Primary as HomeSeasonCardPrimary } from '../../Card/AnimeHome/HomeSeasonCardPrimary.stories';
import { Primary as HomeSeasonCardSecondary } from '../../Card/AnimeHome/HomeSeasonCardSecondary.stories';

export default {
  title: 'Complete/AnimeHome/HomeSeasonSection',
  component: Page,
};

export const Page = () => (
  <section>
    <Title title='Current Season' />
    <HomeSeasonCardPrimary {...HomeSeasonCardPrimary.args} />
    <div className='mt-4 grid grid-cols-1 gap-3 md:grid-cols-2'>
      <HomeSeasonCardSecondary {...HomeSeasonCardSecondary.args} />
      <HomeSeasonCardSecondary {...HomeSeasonCardSecondary.args} />
      <HomeSeasonCardSecondary {...HomeSeasonCardSecondary.args} />
      <HomeSeasonCardSecondary {...HomeSeasonCardSecondary.args} />
      <HomeSeasonCardSecondary {...HomeSeasonCardSecondary.args} />
      <HomeSeasonCardSecondary {...HomeSeasonCardSecondary.args} />
    </div>
  </section>
);
