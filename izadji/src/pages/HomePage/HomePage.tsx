import { ReactNode, useEffect, useState } from 'react';
import homePageService from '../../services/homePageService';
import workProgramService from '../../services/workProgramService';
import getHomePageComponents from '../../utils/mappers/homePageMapper';

const HomePage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);
  const [workPrograms, setWorkPrograms] = useState({});

  useEffect(() => {
    workProgramService.getWorkProgramPages().then((response) => {
      setWorkPrograms(response.data.data);
    });
  }, []);

  useEffect(() => {
    homePageService.getHomePage().then((response) => {
      console.log(response);
      setComponents(getHomePageComponents(response, workPrograms));
    });
  }, [workPrograms]);

  return <>{components}</>;
};

export default HomePage;
