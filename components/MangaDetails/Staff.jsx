import MangaSectionTitle from '../Title/MangaSectionTitle';
import MangaStaff from '../Card/MangaDetails/MangaStaff';

const Staff = ({ staff }) => {
  return (
    <section>
      <MangaSectionTitle title='Staff' />
      <div className='grid grid-cols-2 gap-5 lg:grid-cols-4'>
        {staff.nodes.map((person) => (
          <MangaStaff
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
