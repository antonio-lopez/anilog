import AnimeSectionTitle from '../Title/AnimeSectionTitle';
import AnimeStaff from '../Card/AnimeDetails/AnimeStaff';

const Staff = ({ staff }) => {
  return (
    <section>
      <AnimeSectionTitle title='Staff' />
      <div className='grid grid-cols-2 gap-5 lg:grid-cols-4'>
        {staff.nodes.map((person) => (
          <AnimeStaff
            key={person.id}
            image={person.image.large}
            alt={person.name.full}
            fullName={person.name.full}
          />
        ))}
      </div>
    </section>
  );
};

export default Staff;
