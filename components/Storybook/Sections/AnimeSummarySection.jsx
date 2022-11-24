import AnimeSummary from '../../Card/AnimeDetails/AnimeSummary';

const AnimeSummarySection = ({ image, alt, title, description }) => {
  return (
    <div>
      <AnimeSummary
        image={image}
        alt={alt}
        title={title}
        description={description}
      />
    </div>
  );
};

export default AnimeSummarySection;
