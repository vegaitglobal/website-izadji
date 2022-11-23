import { ComponentMeta, ComponentStory } from '@storybook/react';
import Donate from './Donate';

export default {
  title: 'Donate',
  component: Donate,
} as ComponentMeta<typeof Donate>;

const Default: ComponentStory<typeof Donate> = (args) => <Donate {...args} />;

export const DefaultDonate = Default.bind({});
DefaultDonate.args = {
  text: 'Odaberi aktuelni projekat za donaciju',
  title: 'Doniraj',
  donationProjects: [
    {
      projectName: 'Projekat 1',
      paymentReferenceNumber: '8232-8232',
      paymentAccountNumber: '123-24254251-22',
      title: 'Dodatne Informacije o projektu',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae',
      paymentModel: '27',
      projectPageId: '1',
      paymentReceiver: "Ogranizacija projekta #1 'Ime Organizacije'",
    },
    {
      paymentReceiver: "Ogranizacija projekta #2 'Ime Organizacije'",
      paymentReferenceNumber: '8232-8232',
      paymentAccountNumber: '123-24254251-22',
      title: 'Dodatne Informacije o projektu',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae',
      paymentModel: '27',
      projectPageId: '2',
      projectName: 'Projekat 2',
    },
    {
      projectName: 'Projekat 3',
      paymentReferenceNumber: '8232-8232',
      paymentAccountNumber: '123-24254251-22',
      title: 'Dodatne Informacije o projektu',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae',
      paymentModel: '27',
      projectPageId: '3',
      paymentReceiver: "Ogranizacija projekta #3 'Ime Organizacije'",
    },
  ],
};
