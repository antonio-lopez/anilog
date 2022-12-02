/* eslint-disable import/no-anonymous-default-export */
import { Primary as Title } from '../../Title/AnimeSectionTitle.stories';
import { Primary as AnimeCharacter } from '../../Card/AnimeDetails/AnimeCharacter.stories';

export default {
  title: 'Complete/AnimeDetails/AnimeCharacterSection',
  component: Page,
};

export const Page = () => (
  <section>
    <Title title='Characters' />
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
      <AnimeCharacter {...AnimeCharacter.args} />
      <AnimeCharacter {...AnimeCharacter.args} />
      <AnimeCharacter {...AnimeCharacter.args} />
      <AnimeCharacter {...AnimeCharacter.args} />
      <AnimeCharacter {...AnimeCharacter.args} />
      <AnimeCharacter {...AnimeCharacter.args} />
    </div>
  </section>
);
