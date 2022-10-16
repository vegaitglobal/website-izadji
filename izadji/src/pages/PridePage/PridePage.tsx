import { useEffect, useState } from 'react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import pridePageService from '../../services/pridePageService';
import getPridePageComponents from '../../utils/mappers/pridePageMappers';

const PridePage = () => {
  const [components, setComponents] = useState<any>([]);

  useEffect(() => {
    pridePageService.getPridePage().then((response) => {
      setComponents(getPridePageComponents(response));
    });
  }, []);

  return <>{components}</>;
};

export default PridePage;
