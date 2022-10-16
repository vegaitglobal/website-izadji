import { ComponentMeta, ComponentStory } from '@storybook/react';
import ContactForm from './ContactForm';

export default {
  title: 'ContactForm',
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

const Default: ComponentStory<typeof ContactForm> = (args) => (
  <ContactForm {...args} />
);

export const DefaultContactForm = Default.bind({});
DefaultContactForm.args = {
  address: 'Adresa Adresa 19, Novi Sad',
  phoneNumber: 'office@izadji.rs',
  email: '0638889999',
};
