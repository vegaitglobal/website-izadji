import { ReactNode, useEffect, useState } from 'react';
import homePageService from '../../services/homePageService';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import HomePageMapper from '../../utils/mappers/homePageMapper';

const HomePage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);

  useEffect(() => {
    homePageService.getHomePage().then((response) => {
      MapComponents(
        response.data.data.attributes.components,
        [HomePageMapper],
        setComponents
      );
    });
  }, []);

  return <>{components}</>;
};

export default HomePage;
