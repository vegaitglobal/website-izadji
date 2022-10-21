import { ReactNode, useEffect, useState } from 'react';
import donatePageService from '../../services/donatePageService';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import DonatePageMapper from '../../utils/mappers/donatePageMapper';

const DonatePage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);

  useEffect(() => {
    donatePageService.getDonatePage().then((response) => {
      console.log('donate page', response);
      MapComponents(
        response.data.data.attributes.components,
        [DonatePageMapper],
        setComponents
      );
    });
  }, []);

  return <>{components}</>;
};

export default DonatePage;
