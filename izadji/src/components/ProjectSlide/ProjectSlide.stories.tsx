import ProjectSlide from './ProjectSlide';
import ProjectSlideImage1 from '../../assets/images/content/01.jpg';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Project Slide',
  component: ProjectSlide,
} as ComponentMeta<typeof ProjectSlide>;

const Default: ComponentStory<typeof ProjectSlide> = (args) => (
  <ProjectSlide {...args} />
);

export const DefaultProjectSlide = Default.bind({});
DefaultProjectSlide.args = {
  imageSrc: ProjectSlideImage1,
  date: '29. novembar',
  title: 'Novi Projekat udruzenja Ime Projekta',
  description:
    "Savetovalište Grupe 'IZAĐI' raspisuje poziv za volontere i volonterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....",
  linkText: 'Saznaj više',
  link: '/projekat1',
};
