import './App.css';
import ProjectSlideImage1 from './assets/images/content/01.jpg';
import ProjectSlideImage2 from './assets/images/content/02.jpg';
import CollaboratorsSlider from './components/CollaboratorsSlider/CollaboratorsSlider';

const projectSlides = [
  {
    imageSrc: ProjectSlideImage1,
    date: '29. novembar',
    title: 'Novi Projekat udruzenja Ime Projekta',
    description:
      "Savetovalište Grupe 'IZAĐI' raspisuje poziv za volontere i volonterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....",
  },
  {
    imageSrc: ProjectSlideImage2,
    date: '30. novembar',
    title: 'Novi Projekat udruzenja Ime Projekta',
    description:
      'Savetovalište G pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....',
  },
  {
    imageSrc: ProjectSlideImage1,
    date: '25. decembar',
    title: 'Novi Projekat udruzenja Ime Projekta',
    description:
      "Savetovalište Grupe 'IZAĐI'onterke! U okviru našeg savetovališta, pruža se besplatna savetodavna i psihoterapijska podrška LGBTIQ+ osobama i članovima/cama njihovih....",
  },
];

function App() {
  return <CollaboratorsSlider collaborators={projectSlides} title="Partneri" />;
}

export default App;
