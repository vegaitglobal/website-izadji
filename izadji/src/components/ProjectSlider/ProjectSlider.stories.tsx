import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProjectSlider from './ProjectSlider';
import ProjectSlideImage1 from '../../assets/images/content/01.jpg';
import ProjectSlideImage2 from '../../assets/images/content/02.jpg';
import ProjectSlideImage3 from '../../assets/images/content/21.jpg';

const projectSlides = [
  {
    imageSrc: ProjectSlideImage1,
    date: '29. novembar',
    title: 'Novi Projekat udruzenja Ime Projekta',
    description:
      "Savetovalište Grupe 'IZAĐI' raspisuje poziv za volontere i volonterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....",
    linkText: 'Saznaj više',
    link: '/projekat1',
  },
  {
    imageSrc: ProjectSlideImage2,
    date: '30. novembar',
    title: 'Novi Projekat udruzenja Ime Projekta',
    description:
      'Savetovalište G pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....',
    linkText: 'Saznaj više',
    link: '/projekat2',
  },
  {
    imageSrc: ProjectSlideImage3,
    date: '25. decembar',
    title: 'Novi Projekat udruzenja Ime Projekta',
    description:
      "Savetovalište Grupe 'IZAĐI'onterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....",
    linkText: 'Saznaj više',
    link: '/projekat3',
  },
];

export default {
  title: 'Project Slider',
  component: ProjectSlider,
} as ComponentMeta<typeof ProjectSlider>;

const Default: ComponentStory<typeof ProjectSlider> = (args) => (
  <ProjectSlider {...args} />
);

export const DefaultProjectSlider = Default.bind({});
DefaultProjectSlider.args = {
  slides: projectSlides,
};
