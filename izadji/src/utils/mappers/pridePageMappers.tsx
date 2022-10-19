import { ReactNode } from 'react';
import Banner from '../../components/Banner/Banner';
import {TryMapSharedComponents} from "./sharedMapper";

const mappers = [ TryMapSharedComponents ];

const getPridePageComponents = (
  response: any,
  workPrograms: any
): ReactNode[]  => {

  const bannerData = response.data.data.attributes.banner;

  const bannerComponent = (
      <Banner
          title={bannerData.title}
          text={bannerData.text}
          imageSrc={`${process.env.REACT_APP_STRAPI_HOST}${bannerData.image.data.attributes.url}`}
      />
  );

  return [bannerComponent].concat(response.data.data.attributes.components.map((component: any) => {
    for (const mapper of mappers) {
      const mappingResult = mapper(component, {workPrograms});
      if (mappingResult.success) return mappingResult.mappedElement;
    }
    console.error('failed to map', component);
    return null;
  }).filter((component: any) => !!component));
};

export default getPridePageComponents;
