import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import projectPagesService from '../../services/projectService';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import Banner from '../../components/Banner/Banner';
import ProjectPageMapper from '../../utils/mappers/projectPageMapper';

const ProjectPage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    projectPagesService.getProjectPage(id).then((response: any) => {
      const bannerData = response.data.data.attributes.banner;
      MapComponents(
        response.data.data.attributes.components,
        [ProjectPageMapper],
        setComponents,
        {
          appendBefore: [
            <Banner
              key="project_page_banner"
              title={bannerData.title}
              text={bannerData.text}
              imageSrc={`${process.env.REACT_APP_STRAPI_HOST}${bannerData.image.data.attributes.url}`}
            />,
          ],
        }
      );
    });
  }, [id]);
  return <>{components}</>;
};

export default ProjectPage;
