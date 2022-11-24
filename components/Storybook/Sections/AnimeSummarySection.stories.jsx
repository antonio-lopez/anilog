/* eslint-disable import/no-anonymous-default-export */
import AnimeSummarySection from './AnimeSummarySection';

export default {
  title: 'Complete/AnimeDetails/AnimeSummarySection',
  component: AnimeSummarySection,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AnimeSummarySection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: '/assets/offline-main.png',
  alt: 'anime cover',
  title: 'Kaguya-sama: Love is War?',
  description:
    "The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends. Meanwhile, council treasurer Yuu Ishigami suffers under the weight of his hopeless crush on Tsubame Koyasu, a popular upperclassman who helps to instill a new confidence in him. Miko Iino, the newest student council member, grows closer to the rule-breaking Ishigami while striving to overcome her own authoritarian moral code. As love further blooms at Shuchiin Academy, the student council officers drag their outsider friends into increasingly comedic conflicts. ",
};
