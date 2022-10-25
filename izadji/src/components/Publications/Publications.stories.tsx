import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProjectSlideImage1 from '../../assets/images/content/01.jpg';
import ProjectSlideImage2 from '../../assets/images/content/02.jpg';
import ProjectSlideImage3 from '../../assets/images/content/21.jpg';
import Publications from './Publications';

const projectSlides = [
  {
    imageSrc: ProjectSlideImage1,
    title: 'Novi Projekat udruzenja Ime Projekta',
    text: "Savetovalište Grupe 'IZAĐI' raspisuje poziv za volontere i volonterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....",
    buttonText: 'Download',
    href:'',
    download:'',
  },
  {
    imageSrc: ProjectSlideImage2,
    title: 'Novi Projekat udruzenja Ime Projekta',
    text: 'Savetovalište G pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....',
    buttonText: 'Download',
    href:'',
    download:'',
  },
  {
    imageSrc: ProjectSlideImage3,
    title: 'Novi Projekat udruzenja Ime Projekta',
    text: "Savetovalište Grupe 'IZAĐI'onterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....Savetovalište Grupe 'IZAĐI'onterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....Savetovalište Grupe 'IZAĐI'onterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....Savetovalište Grupe 'IZAĐI'onterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....Savetovalište Grupe 'IZAĐI'onterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....Savetovalište Grupe 'IZAĐI'onterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....Savetovalište Grupe 'IZAĐI'onterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....",
    buttonText: 'Download',
    href:'',
    download:'',
  },
];

export default {
  title: 'Publications',
  component: Publications,
} as ComponentMeta<typeof Publications>;

const Default: ComponentStory<typeof Publications> = (args) => (
  <Publications {...args} />
);

export const DefaultProjectSlider = Default.bind({});
DefaultProjectSlider.args = {
  publications: projectSlides,
};
