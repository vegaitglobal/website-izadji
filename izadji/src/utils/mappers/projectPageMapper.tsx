import VolunteeringForm from '../../components/VolunteeringForm/VolunteeringForm';
import ProjectPageComponents from '../enums/projectPageComponents';
import { MappingFunction } from './sharedMapper';

const ProjectPageMapper: MappingFunction = (component) => {
  switch (component['__component']) {
    case ProjectPageComponents.VOLUNTEER_FORM: {
      return (
        <VolunteeringForm
          key={`volunteer_form_${component.id}`}
          title={component.title}
          description={component.description}
          buttonText={component.buttonText}
        />
      );
    }
  }
};

export default ProjectPageMapper;
