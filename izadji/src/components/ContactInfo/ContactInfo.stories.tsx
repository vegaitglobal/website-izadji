import { ComponentMeta, ComponentStory } from '@storybook/react';
import ContactInfo from './ContactInfo';

export default {
  title: 'ContactInfo',
  component: ContactInfo,
} as ComponentMeta<typeof ContactInfo>;

const Default: ComponentStory<typeof ContactInfo> = (args) => (
  <ContactInfo {...args} />
);

export const DefaultContactInfo = Default.bind({});
DefaultContactInfo.args = {
  address: 'Adresa Adresa 19, Novi Sad',
  phoneNumber: 'office@izadji.rs',
  email: '0638889999',
};
