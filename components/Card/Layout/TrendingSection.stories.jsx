/* eslint-disable import/no-anonymous-default-export */
import TrendingSection from './TrendingSection';

// Due to Storybook and Tailwind CSS limitations, this combined component layout is implented in TrendingSection.jsx file.
export default {
  title: 'Card/Layout/TrendingSection',
  component: TrendingSection,
};

export const Page = (args) => <TrendingSection {...args} />;
