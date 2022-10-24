import { ReactNode, useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import aboutUsPageService from '../../services/aboutUsPageService';
import AboutUsPageMapper from '../../utils/mappers/aboutUsPageMapper';
import { MapComponents } from '../../utils/mappers/sharedMapper';

const AboutUsPage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);

  useEffect(() => {
    aboutUsPageService.getAboutUsPage().then((response: any) => {
      const bannerData = response.data.data.attributes.banner;
      MapComponents(
        response.data.data.attributes.components,
        [AboutUsPageMapper],
        setComponents,
        {
          appendBefore: [
            <Banner
              key="abous_us_page_banner"
              title={bannerData.title}
              text={bannerData.text}
              imageSrc={bannerData.image.data.attributes.url}
            />,
          ],
        }
      );
    });
  }, []);

  return <>{components}</>;
};
export default AboutUsPage;
