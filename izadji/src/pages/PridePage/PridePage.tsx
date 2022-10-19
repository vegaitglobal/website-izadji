import {ReactNode, useEffect, useState} from 'react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import pridePageService from '../../services/pridePageService';
import HomePageMapper from "../../utils/mappers/homePageMapper";
import { MapComponents } from '../../utils/mappers/sharedMapper';
import Banner from "../../components/Banner/Banner";

const PridePage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);

  useEffect(() => {
    pridePageService.getPridePage().then((response) => {
      const bannerData = response.data.data.attributes.banner;
      MapComponents(response.data.data.attributes.components, [ HomePageMapper ], setComponents, {
        appendBefore: [
          (<Banner key="pride_banner"
              title={bannerData.title}
              text={bannerData.text}
              imageSrc={`${process.env.REACT_APP_STRAPI_HOST}${bannerData.image.data.attributes.url}`}
          />)
        ]
      });
    });
  }, []);

  return <>{components}</>;
};

export default PridePage;
