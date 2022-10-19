import {EventProps} from '../../components/Event/Event';
import EventsSlider from '../../components/EventsSlider/EventsSlider';
import {convertDate, convertWeekDay} from '../dateTimeConversion';
import HomePageComponents from '../enums/homePageComponents';
import {MappingFunction} from "./sharedMapper";

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

const HomePageMapper : MappingFunction = (component) => {
    switch (component['__component']) {
        case HomePageComponents.EVENT_TABLE: {
            return <EventsSlider
                key={`events_slider_${component['__component'].id}`}
                events={getEventTableSlides(
                    component.event_table.data.attributes.event
                )}
            />;
        }
    }
}

export default HomePageMapper;
