import { ComponentMeta, ComponentStory } from '@storybook/react';
import Breadcrumbs from './Beadcrumbs';
import { routes } from '../../routes';
import { MemoryRouter } from 'react-router';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Default: ComponentStory<typeof Breadcrumbs> = (args) => (
  <MemoryRouter>
    <Breadcrumbs {...args} />
  </MemoryRouter>
);

export const DefaultBreadcrumbs = Default.bind({});
DefaultBreadcrumbs.args = {
  crumbs: [
    {
      text: 'Blog',
      url: routes.blog,
    },
    {
      text: "Let's Challenge Gender Roles",
      url: routes.blogPage.replace(':id', '1'),
    },
  ],
};
