import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import EmailSent from './EmailSent';

export default {
  title: 'EmailSent',
  component: EmailSent,
} as ComponentMeta<typeof EmailSent>;

const Default: ComponentStory<typeof EmailSent> = (args) => (
  <MemoryRouter>
    <EmailSent {...args} />
  </MemoryRouter>
);

export const DefaultEmailSent = Default.bind({});
DefaultEmailSent.args = {
  title: 'Uspešno ste poslali poruku!',
  description: 'Javićemo se u što kraćem roku, hvala Vam na strpljenju...',
  buttonText: 'Nazad na Početnu',
};
