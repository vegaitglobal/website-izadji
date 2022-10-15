import { ComponentMeta, ComponentStory } from '@storybook/react';
import GallerySlider from './GallerySlider';
import GalleryImage1 from '../../assets/images/content/01.jpg';
import GalleryImage2 from '../../assets/images/content/02.jpg';

export default {
  title: 'Gallery Slider',
  component: GallerySlider,
} as ComponentMeta<typeof GallerySlider>;

const Default: ComponentStory<typeof GallerySlider> = (args) => (
  <GallerySlider {...args} />
);

export const DefaultGallerySlider = Default.bind({});
DefaultGallerySlider.args = {
  slides: [
    {
      imageSrc: GalleryImage1,
      largeImageSrc: GalleryImage1,
      altText: 'Gallery image 1',
    },
    {
      imageSrc: GalleryImage2,
      largeImageSrc: GalleryImage2,
      altText: 'Gallery image 2',
    },
    {
      imageSrc: GalleryImage1,
      largeImageSrc: GalleryImage1,
      altText: 'Gallery image 3',
    },
    {
      imageSrc: GalleryImage2,
      largeImageSrc: GalleryImage2,
      altText: 'Gallery image 4',
    },
    {
      imageSrc: GalleryImage1,
      largeImageSrc: GalleryImage1,
      altText: 'Gallery image 5',
    },
  ],
};
