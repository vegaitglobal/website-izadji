import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import projectPagesService from '../../services/projectService';
import getProjectPageComponents from '../../utils/mappers/projectPageMapper';

const ProjectPage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    console.log(id);

    projectPagesService.getProjectPage(id).then((response: any) => {
      setComponents(getProjectPageComponents(response));
      console.log(response);
    });
  }, [id]);
  return <>{components}</>;
};

export default ProjectPage;
