/* eslint-disable import/no-anonymous-default-export */
import { Primary as Title } from '../../Title/AnimeSectionTitle.stories';
import { Primary as AnimeRelations } from '../../Card/AnimeDetails/AnimeRelations.stories';

export default {
  title: 'Complete/AnimeDetails/AnimeRelationsSection',
  component: Page,
};

export const Page = () => (
  <section>
    <Title title='Relations' />
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
      <AnimeRelations {...AnimeRelations.args} />
      <AnimeRelations {...AnimeRelations.args} />
      <AnimeRelations {...AnimeRelations.args} />
    </div>
  </section>
);
