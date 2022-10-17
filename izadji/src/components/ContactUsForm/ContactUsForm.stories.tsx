import ContactUsForm from './ContactUsForm';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ContactUsForm',
  component: ContactUsForm,
} as ComponentMeta<typeof ContactUsForm>;

const Default: ComponentStory<typeof ContactUsForm> = (args) => (
  <ContactUsForm {...args} />
);

export const DefaultContactUsForm = Default.bind({});
DefaultContactUsForm.args = {
  title: 'KONTAKTIRAJTE NAS',
  text: 'Promenimo svet zajedno!',
  namePlaceholder: 'Ime i prezime',
  phonePlaceholder: 'Telefon',
  emailPlaceholder: 'Email Adresa',
  messagePlaceholder: 'Poruka',
  checkboxPlaceholder: 'Želim kopiju poruke',
  buttonLabel: 'Pošalji',
  showArrow: true,
};
