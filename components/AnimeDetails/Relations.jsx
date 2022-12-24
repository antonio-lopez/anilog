import AnimeRelations from '../Card/AnimeDetails/AnimeRelations';
import AnimeSectionTitle from '../Title/AnimeSectionTitle';
import getRelations from '../../utils/findRelations';

const RelationsAnime = ({ relations }) => {
  const relationsArr = getRelations(relations.edges);

  return (
    <section className='-mt-5'>
      <AnimeSectionTitle title='Relations' />
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {relationsArr.map((relation) => (
          <AnimeRelations
            relationId={relation.node.id}
            key={relation.id}
            image={relation.node.coverImage.extraLarge}
            alt={
              relation.node.title.english
                ? relation.node.title.english
                : relation.node.title.romaji
            }
            title={
              relation.node.title.english
                ? relation.node.title.english
                : relation.node.title.romaji
            }
            relationshipType={relation.relationType}
            type={relation.node.type}
          />
        ))}
      </div>
    </section>
  );
};

export default RelationsAnime;
