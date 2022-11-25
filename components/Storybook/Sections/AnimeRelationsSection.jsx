import AnimeSectionTitle from '../../Title/AnimeSectionTitle';
import AnimeRelations from '../../Card/AnimeDetails/AnimeRelations';

const AnimeRelationsSection = ({
  image,
  alt,
  title,
  relationshipType,
  type,
}) => {
  return (
    <section className='layout'>
      <AnimeSectionTitle title='Relations' />
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        <AnimeRelations
          image={image}
          alt={alt}
          title={title}
          relationshipType={relationshipType}
          type={type}
        />
        <AnimeRelations
          image={image}
          alt={alt}
          title={title}
          relationshipType={relationshipType}
          type={type}
        />
        <AnimeRelations
          image={image}
          alt={alt}
          title={title}
          relationshipType={relationshipType}
          type={type}
        />
      </div>
    </section>
  );
};

export default AnimeRelationsSection;
