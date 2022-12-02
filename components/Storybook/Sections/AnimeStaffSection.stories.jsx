/* eslint-disable import/no-anonymous-default-export */
import { Primary as Title } from '../../Title/AnimeSectionTitle.stories';
import { Primary as Staff } from '../../Card/AnimeDetails/AnimeStaff.stories';

export default {
  title: 'Complete/AnimeDetails/AnimeStaffSection',
  component: Page,
};

export const Page = () => (
  <section>
    <Title title='Staff' />
    <div className='grid grid-cols-2 gap-5 lg:grid-cols-4'>
      <Staff {...Staff.args} />
      <Staff {...Staff.args} />
      <Staff {...Staff.args} />
      <Staff {...Staff.args} />
    </div>
  </section>
);
