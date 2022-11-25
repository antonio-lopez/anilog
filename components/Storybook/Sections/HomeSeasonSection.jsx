import SectionTitle from '../../Title/SectionTitle';
import HomeSeasonCardPrimary from '../../Card/AnimeHome/HomeSeasonCardPrimary';
import HomeSeasonCardSecondary from '../../Card/AnimeHome/HomeSeasonCardSecondary';

const HomeSeasonSection = ({
  image,
  alt,
  title,
  studio,
  percentage,
  description,
}) => {
  const secondaryData = {
    image: '/assets/offline-main.png',
    alt: 'anime cover',
    title: 'Kaguya-sama: Love is War?',
    studio: 'A-1 Pictures',
    percentage: '90',
    description:
      "After a slow but eventful summer vacation, Shuchiin Academy's second term is now starting in full force. As August transitions...",
  };
  return (
    <section className='layout'>
      <SectionTitle title='Current Season' />
      <HomeSeasonCardPrimary
        image={image}
        alt={alt}
        title={title}
        studio={studio}
        percentage={percentage}
        description={description}
      />
      <div className='mt-4 grid grid-cols-1 gap-3 md:grid-cols-2'>
        <HomeSeasonCardSecondary
          image={secondaryData.image}
          alt={secondaryData.alt}
          title={secondaryData.title}
          studio={secondaryData.studio}
          percentage={secondaryData.percentage}
          description={secondaryData.description}
        />
        <HomeSeasonCardSecondary
          image={secondaryData.image}
          alt={secondaryData.alt}
          title={secondaryData.title}
          studio={secondaryData.studio}
          percentage={secondaryData.percentage}
          description={secondaryData.description}
        />
        <HomeSeasonCardSecondary
          image={secondaryData.image}
          alt={secondaryData.alt}
          title={secondaryData.title}
          studio={secondaryData.studio}
          percentage={secondaryData.percentage}
          description={secondaryData.description}
        />
        <HomeSeasonCardSecondary
          image={secondaryData.image}
          alt={secondaryData.alt}
          title={secondaryData.title}
          studio={secondaryData.studio}
          percentage={secondaryData.percentage}
          description={secondaryData.description}
        />
      </div>
    </section>
  );
};

export default HomeSeasonSection;
