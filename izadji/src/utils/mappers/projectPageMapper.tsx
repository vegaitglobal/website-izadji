import { ReactNode } from 'react';
import Banner from '../../components/Banner/Banner';
import VolunteeringForm from '../../components/VolunteeringForm/VolunteeringForm';
import ProjectPageComponents from '../enums/projectPageComponents';
import {
  MappingFunction,
  MappingResult,
  TryMapSharedComponents,
} from './sharedMapper';

const TryMapProjectComponents: MappingFunction = (component): MappingResult => {
  switch (component['__component']) {
    case ProjectPageComponents.VOLUNTEER_FORM: {
      return {
        success: true,
        mappedElement: (
          <VolunteeringForm
            title={component.title}
            description={component.description}
            buttonText={component.buttonText}
          />
        ),
      };
    }
    default: {
      return { success: false };
    }
  }
};

const mappers = [TryMapProjectComponents, TryMapSharedComponents];

const getProjectPageComponents = (projectPageResponse: any): ReactNode[] => {
  const bannerData = projectPageResponse.data.data.attributes.banner;

  const bannerComponent = (
    <Banner
      title={bannerData.title}
      text={bannerData.text}
      imageSrc={`${process.env.REACT_APP_STRAPI_HOST}${bannerData.image.data.attributes.url}`}
    />
  );
  return [bannerComponent].concat(
    projectPageResponse.data.data.attributes.components
      .map((component: any) => {
        for (const mapper of mappers) {
          const mappingResult = mapper(component);
          if (mappingResult.success) return mappingResult.mappedElement;
        }
        console.error('failed to map', component);
        return null;
      })
      .filter((component: any) => !!component)
  );
};
export default getProjectPageComponents;
