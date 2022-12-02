/* eslint-disable import/no-anonymous-default-export */
import { Primary as Layout } from '../Layout/Layout.stories';
import { Primary as AnimeBanner } from '../AnimeBanner.stories';
import { Page as AnimeSummary } from './Sections/AnimeSummarySection.stories';
import { Page as AnimeRelations } from './Sections/AnimeRelationsSection.stories';
import { Primary as AnimeInfo } from '../Card/AnimeDetails/AnimeInfo.stories';
import { Page as AnimeCharacter } from './Sections/AnimeCharacterSection.stories';
import { Page as AnimeStaff } from './Sections/AnimeStaffSection.stories';

export default {
  title: 'Complete/AnimeDetailsPage',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Page = () => (
  <Layout {...Layout.args}>
    <AnimeBanner {...AnimeBanner.args} />
    <AnimeSummary {...AnimeSummary.args} />
    <div className='layout grid grid-cols-1 gap-10 py-10 lg:grid-cols-[240px,_auto]'>
      <div>
        <AnimeRelations {...AnimeRelations.args} />
        <AnimeCharacter {...AnimeCharacter.args} />
        <AnimeStaff {...AnimeStaff.args} />
      </div>
      <div className='lg:row-start-1'>
        <AnimeInfo {...AnimeInfo.args} />
      </div>
    </div>
  </Layout>
);
