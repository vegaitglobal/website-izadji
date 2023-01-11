import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Banner from '../../components/Banner/Banner';
import workProgramService from '../../services/workProgramService';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import WorkProgramPageMapper from '../../utils/mappers/workProgramPageMapper';
import { getApiUrl } from '../../utils/urlHelpers';

type WorkProgramPageProps = {
  id: string;
};

const WorkProgramPage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);
  const { id } = useParams<WorkProgramPageProps>();

  useEffect(() => {
    if (!id) {
      return;
    }

    workProgramService.getWorkProgramPage(+id).then((response: any) => {
      const bannerData = response.data.data.attributes.banner;
      MapComponents(
        response.data.data.attributes.components,
        [WorkProgramPageMapper],
        setComponents,
        {
          appendBefore: [
            <Banner
              key="work_program_banner"
              title={bannerData.title}
              text={bannerData.text}
              imageSrc={getApiUrl(bannerData.image.data.attributes.url)}
            />,
          ],
        }
      );
    });
  }, [id]);

  return <>{components}</>;
};

export default WorkProgramPage;
