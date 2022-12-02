/* eslint-disable import/no-anonymous-default-export */
import { Primary as AnimeSummary } from '../../Card/AnimeDetails/AnimeSummary.stories';

export default {
  title: 'Complete/AnimeDetails/AnimeSummarySection',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Page = () => (
  <section>
    <AnimeSummary {...AnimeSummary.args} />
  </section>
);
