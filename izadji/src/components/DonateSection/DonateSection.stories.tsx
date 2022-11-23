import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import DonateSection from './DonateSection';

export default {
  title: 'DonateSection',
  component: DonateSection,
} as ComponentMeta<typeof DonateSection>;

const Default: ComponentStory<typeof DonateSection> = (args) => (
  <MemoryRouter>
    <DonateSection {...args} />
  </MemoryRouter>
);

export const DefaultDonateSection = Default.bind({});
DefaultDonateSection.args = {
  title: 'Doniraj',
  content:
    'Zelis da ucestvujes u nasim ciljevima, da pomognes nasoj zajednici. Sa ove stranice mozes da **doniras**.',
  buttonText: 'Doniraj',
  buttonHref: 'https://www.google.com',
};
