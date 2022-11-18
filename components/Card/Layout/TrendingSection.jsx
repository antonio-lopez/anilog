// Combined component layout. Can be viewed in Card/Layout/TrendingSection in Storybook

import HomeTrendingCardPrimary from '../HomeTrendingCardPrimary';
import HomeTrendingCardSecondary from '../HomeTrendingCardSecondary';

const TrendingSection = () => {
  const trendingPrimaryData = {
    image: '/assets/offline-cover.jpg',
    alt: 'anime cover',
    title: 'Kaguya-sama: Love is War?',
    studio: 'A-1 Pictures',
    percentage: '90',
    description:
      "After a slow but eventful summer vacation, Shuchiin Academy's second term is now starting in full force. As August transitions into September, Miyuki Shirogane's birthday looms ever closer, leaving Kaguya Shinomiya in a serious predicament as to how to celebrate it. Furthermore, the tenure of the school's 67th student council is coming to an end. Due to the council members being in different classes, the only time Kaguya and Miyuki have to be together will soon disappear, putting all of their cunning plans at risk.",
  };

  const trendingSecondaryData = {
    image: '/assets/offline-cover.jpg',
    alt: 'anime cover',
    title: 'Kaguya-sama: Love is War?',
    studio: 'A-1 Pictures',
    percentage: '90',
  };

  return (
    <div className='layout grid grid-cols-1 gap-4 rounded-xl bg-eerieBlack p-4 lg:grid-cols-2'>
      <HomeTrendingCardPrimary
        image={trendingPrimaryData.image}
        alt={trendingPrimaryData.alt}
        title={trendingPrimaryData.title}
        studio={trendingPrimaryData.studio}
        percentage={trendingPrimaryData.percentage}
        description={trendingPrimaryData.description}
      />
      <div className='grid grid-cols-1 gap-4'>
        <HomeTrendingCardSecondary
          image={trendingSecondaryData.image}
          alt={trendingSecondaryData.alt}
          title={trendingSecondaryData.title}
          studio={trendingSecondaryData.studio}
          percentage={trendingSecondaryData.percentage}
        />
        <HomeTrendingCardSecondary
          image={trendingSecondaryData.image}
          alt={trendingSecondaryData.alt}
          title={trendingSecondaryData.title}
          studio={trendingSecondaryData.studio}
          percentage={trendingSecondaryData.percentage}
        />
        <HomeTrendingCardSecondary
          image={trendingSecondaryData.image}
          alt={trendingSecondaryData.alt}
          title={trendingSecondaryData.title}
          studio={trendingSecondaryData.studio}
          percentage={trendingSecondaryData.percentage}
        />
        <HomeTrendingCardSecondary
          image={trendingSecondaryData.image}
          alt={trendingSecondaryData.alt}
          title={trendingSecondaryData.title}
          studio={trendingSecondaryData.studio}
          percentage={trendingSecondaryData.percentage}
        />
      </div>
    </div>
  );
};

export default TrendingSection;
