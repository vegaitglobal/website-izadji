import { EventProps } from '../../components/Event/Event';
import EventsSlider from '../../components/EventsSlider/EventsSlider';
import { ProjectSlideProps } from '../../components/ProjectSlide/ProjectSlide';
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider';
import projectPagesService from '../../services/projectService';
import { convertDate, convertWeekDay } from '../dateTimeConversion';
import HomePageComponents from '../enums/homePageComponents';
import { MappingFunction } from './sharedMapper';

const getEventTableSlides = (events: any): EventProps[] => {
  return events.map((eventData: any) => {
    const [startHours, startMinutes] = eventData.timeStart.split(':');
    const [endHours, endMinutes] = eventData.timeStart.split(':');
    return {
      date: convertDate(eventData.date, true),
      weekDay: convertWeekDay(eventData.date),
      timeStart: `${startHours}:${startMinutes}`,
      timeEnd: `${endHours}:${endMinutes}`,
      name: eventData.text,
      link: eventData.link,
    };
  });
};

const getProjectSlides = (projects: any): ProjectSlideProps[] => {
  return projects.map((projectData: any) => {
    const projectBanner = projectData.attributes.banner;
    return {
      imageSrc: projectBanner.image.data.attributes.url,
      date: projectBanner.date && convertDate(projectBanner.date, false),
      title: projectBanner.title,
      description: projectBanner.text,
      link: `/project/${projectData.id}`,
      linkText: projectBanner.linkText,
      key: projectData.id,
    };
  });
};

const HomePageMapper: MappingFunction = async (component) => {
  switch (component['__component']) {
    case HomePageComponents.EVENT_TABLE: {
      return (
        <EventsSlider
          key={`events_slider_${component.id}`}
          events={getEventTableSlides(
            component.event_table.data.attributes.event
          )}
        />
      );
    }
    case HomePageComponents.PROJECTS_SLIDER: {
      const projects = await projectPagesService.getProjectPages();
      return (
        <ProjectSlider
          key={`projects_slider_${component.id}`}
          slides={getProjectSlides(projects.data.data)}
        />
      );
    }
  }
};

export default HomePageMapper;
