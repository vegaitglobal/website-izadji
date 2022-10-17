import { useEffect, useState } from 'react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import Banner from '../../components/Banner/Banner';
import pridePageService from '../../services/pridePageService';
import workProgramService from '../../services/workProgramService';
import getPridePageComponents from '../../utils/mappers/pridePageMappers';

const PridePage = () => {
  const [components, setComponents] = useState<any>([]);
  const [workPrograms, setWorkPrograms] = useState({});

  useEffect(() => {
    workProgramService.getWorkProgramPages().then((response) => {
      setWorkPrograms(response.data.data);
    });
  }, []);

  useEffect(() => {
    pridePageService.getPridePage().then((response) => {
      setComponents(getPridePageComponents(response, workPrograms));
    });
  }, [workPrograms]);

  return <>{components}</>;
};

export default PridePage;
