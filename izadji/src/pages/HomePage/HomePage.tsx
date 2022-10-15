import { useEffect, useState } from 'react';
import homePageService from '../../services/homePageService';
import getHomePageComponents from '../../utils/mappers/homePageMapper';

import 'swiper/scss';
import 'swiper/scss/pagination';

const HomePage = () => {
  const [components, setComponents] = useState<any>([]);

  useEffect(() => {
    homePageService.getHomePage().then((response) => {
      setComponents(getHomePageComponents(response));
    });
  }, []);

  return <>{components}</>;
};

export default HomePage;
