import { ProjectSlideProps } from '../../components/ProjectSlide/ProjectSlide';
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider';
import { convertDate } from '../dateTimeConversion';

const getProjectSlides = (projects: any): ProjectSlideProps[] => {
  return projects.map((projectData: any) => {
    const projectBanner = projectData.attributes.banner;
    return {
      imageSrc: `${process.env.REACT_APP_STRAPI_HOST}${projectBanner.image.data.attributes.url}`,
      date: projectBanner.date ? convertDate(projectBanner.date, false) : '',
      title: projectBanner.title,
      description: projectBanner.text,
      link: `/projects/${projectData.id}`,
      linkText: 'Saznaj više', // TODO: Check if this should be prop
    };
  });
};

export const getProjectSlider = (projects: any) => {
  return <ProjectSlider slides={getProjectSlides(projects)} />;
};
