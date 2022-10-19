import { ReactNode } from 'react';
import { EventProps } from '../../components/Event/Event';
import EventsSlider from '../../components/EventsSlider/EventsSlider';
import { convertDate, convertWeekDay } from '../dateTimeConversion';
import HomePageComponents from '../enums/homePageComponents';
import {
  MappingFunction,
  MappingResult,
  TryMapSharedComponents,
} from './sharedMapper';

const getEventTableSlides = (events: any): EventProps[] => {
  return events.map((eventData: any) => {
    const startTime = eventData.timeStart.split(':');
    const endTime = eventData.timeStart.split(':');
    return {
      date: convertDate(eventData.date),
      weekDay: convertWeekDay(eventData.date),
      timeStart: `${startTime[0]}:${startTime[1]}`,
      timeEnd: `${endTime[0]}:${endTime[1]}`,
      name: eventData.text,
      link: eventData.link,
    };
  });
};

const TryMapHomeComponents: MappingFunction = (component): MappingResult => {
  switch (component['__component']) {
    case HomePageComponents.EVENT_TABLE: {
      return {
        success: true,
        mappedElement: (
          <EventsSlider
            events={getEventTableSlides(
              component.event_table.data.attributes.event
            )}
          />
        ),
      };
    }
    default: {
      return { success: false };
    }
  }
};

const mappers = [TryMapHomeComponents, TryMapSharedComponents];

const getHomePageComponents = (
  homePageResponse: any,
  workPrograms: any
): ReactNode[] =>
  homePageResponse.data.data.attributes.components
    .map((component: any) => {
      for (const mapper of mappers) {
        const mappingResult = mapper(component, { workPrograms });
        if (mappingResult.success) return mappingResult.mappedElement;
      }
      console.error('failed to map', component);
      return null;
    })
    .filter((component: any) => !!component);

export default getHomePageComponents;
