import AnimeCharacter from '../../Card/AnimeDetails/AnimeCharacter';
import AnimeSectionTitle from '../../Title/AnimeSectionTitle';

const AnimeCharacterSection = ({ image, alt, fullName, role }) => {
  return (
    <section className='layout'>
      <AnimeSectionTitle title='Characters' />
      <div className='grid grid-cols-1 gap-3 pt-5 sm:grid-cols-2 lg:grid-cols-3'>
        <AnimeCharacter
          image={image}
          alt={alt}
          fullName={fullName}
          role={role}
        />
        <AnimeCharacter
          image={image}
          alt={alt}
          fullName={fullName}
          role={role}
        />
        <AnimeCharacter
          image={image}
          alt={alt}
          fullName={fullName}
          role={role}
        />
        <AnimeCharacter
          image={image}
          alt={alt}
          fullName={fullName}
          role={role}
        />
      </div>
    </section>
  );
};

export default AnimeCharacterSection;
