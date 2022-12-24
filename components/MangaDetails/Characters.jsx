import MangaSectionTitle from '../Title/MangaSectionTitle';
import MangaCharacter from '../Card/MangaDetails/MangaCharacter';

const Characters = ({ characters }) => {
  return (
    <section>
      <MangaSectionTitle title='Characters' />
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {characters.edges.map((character) => (
          <MangaCharacter
            key={character.node.id}
            image={character.node.image.large}
            alt={character.node.name.full}
            fullName={character.node.name.full}
            role={character.role}
          />
        ))}
      </div>
    </section>
  );
};

export default Characters;
