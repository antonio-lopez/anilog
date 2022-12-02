/* eslint-disable import/no-anonymous-default-export */
import { Primary as Title } from '../../Title/AnimeSectionTitle.stories';
import { Primary as HomeMovie } from '../../Card/AnimeHome/HomeMovieCard.stories';

export default {
  title: 'Complete/AnimeHome/HomeMovieSection',
  component: Page,
};

export const Page = () => (
  <section>
    <Title title='Movies' />
    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
      <HomeMovie {...HomeMovie.args} />
      <HomeMovie {...HomeMovie.args} />
      <HomeMovie {...HomeMovie.args} />
    </div>
  </section>
);
