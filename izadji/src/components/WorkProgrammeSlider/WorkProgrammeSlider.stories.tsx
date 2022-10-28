import { ComponentMeta, ComponentStory } from '@storybook/react';
import WorkProgrammeSlider from './WorkProgrammeSlider';
import { MemoryRouter } from 'react-router';

export default {
  title: 'Work Programme Slider',
  component: WorkProgrammeSlider,
} as ComponentMeta<typeof WorkProgrammeSlider>;

const Default: ComponentStory<typeof WorkProgrammeSlider> = (args) => (
  <MemoryRouter>
    <WorkProgrammeSlider {...args} />
  </MemoryRouter>
);

export const DefaultWorkProgrammeSlider = Default.bind({});
DefaultWorkProgrammeSlider.args = {
  heading: 'Psihološko savetovanje',
  slides: [
    {
      heading: 'Omladinski rad',
      description:
        'Cilj programa omladinskog rada je poboljšanje kvaliteta života mladih LGBTI* osoba putem njihovog ličnog i profesionalnog razvoja...',
      link: '/omladinski-rad',
      linkText: 'Saznaj više',
    },
    {
      heading: 'Javno zagovaranje',
      description:
        'Cilj programa omladinskog rada je poboljšanje kvaliteta života mladih LGBTI* osoba putem njihovog ličnog i profesionalnog razvoja...',
      link: '/omladinski-rad',
      linkText: 'Saznaj više',
    },
    {
      heading: 'Psihološko savetovanje',
      description:
        'Cilj programa omladinskog rada je poboljšanje kvaliteta života mladih LGBTI* osoba putem njihovog ličnog i profesionalnog razvoja...',
      link: '/omladinski-rad',
      linkText: 'Saznaj više',
    },
    {
      heading: 'Obuke i treninzi',
      description:
        'Cilj programa omladinskog rada je poboljšanje kvaliteta života mladih LGBTI* osoba putem njihovog ličnog i profesionalnog razvoja...',
      link: '/omladinski-rad',
      linkText: 'Saznaj više',
    },
    {
      heading: 'Lorem ipsum',
      description:
        'Cilj programa omladinskog rada je poboljšanje kvaliteta života mladih LGBTI* osoba putem njihovog ličnog i profesionalnog razvoja...',
      link: '/omladinski-rad',
      linkText: 'Saznaj više',
    },
  ],
};
