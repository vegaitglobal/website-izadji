import { ComponentMeta, ComponentStory } from '@storybook/react';
import CollaboratorsSlider from './CollaboratorsSlider';
import '../../index.css';
import CollaboratorImage1 from '../../assets/images/content/08.png';
import CollaboratorImage2 from '../../assets/images/content/06.png';
import CollaboratorImage3 from '../../assets/images/content/07.png';
import CollaboratorImage4 from '../../assets/images/content/09.png';
import CollaboratorImage5 from '../../assets/images/content/10.png';
import CollaboratorImage6 from '../../assets/images/content/11.png';

const collaboratorsSlides = [
  {
    imageSrc: CollaboratorImage1,
  },
  {
    imageSrc: CollaboratorImage2,
  },
  {
    imageSrc: CollaboratorImage3,
  },
  {
    imageSrc: CollaboratorImage4,
  },
  {
    imageSrc: CollaboratorImage5,
  },
  {
    imageSrc: CollaboratorImage6,
  },
];

export default {
  title: 'Collaborators Slider',
  component: CollaboratorsSlider,
} as ComponentMeta<typeof CollaboratorsSlider>;

const Default: ComponentStory<typeof CollaboratorsSlider> = (args) => (
  <CollaboratorsSlider {...args} />
);

export const DefaultProjectSlider = Default.bind({});
DefaultProjectSlider.args = {
  collaborators: collaboratorsSlides,
  title: 'Partneri',
};
