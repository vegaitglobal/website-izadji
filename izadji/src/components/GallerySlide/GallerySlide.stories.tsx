import { ComponentMeta, ComponentStory } from '@storybook/react';
import GallerySlide from './GallerySlide';
import GalleryImage from '../../assets/images/content/01.jpg';

export default {
  title: 'Gallery Slide',
  component: GallerySlide,
} as ComponentMeta<typeof GallerySlide>;

const Default: ComponentStory<typeof GallerySlide> = (args) => (
  <GallerySlide {...args} />
);

export const DefaultGallerySlide = Default.bind({});
DefaultGallerySlide.args = {
  imageSrc: GalleryImage,
  largeImageSrc: GalleryImage,
  altText: 'Gallery image',
};
