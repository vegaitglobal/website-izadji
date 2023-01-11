import { matchPath } from 'react-router';
import RichTextComponent from '../../components/RichTextComponent/RichTextComponent';
import { routes } from '../../routes';
import workProgramService from '../../services/workProgramService';
import SharedComponents from '../enums/sharedComponents';
import { MappingFunction } from './sharedMapper';
import { getWorkProgramSlider } from './workProgramMapper';

const WorkProgramPageMapper: MappingFunction = async (component) => {
  switch (component['__component']) {
    case SharedComponents.WORK_PROGRAM_SLIDER: {
      const match = matchPath(routes.workProgram, window.location.pathname);
      const workPrograms =
        await workProgramService.getWorkProgramPagesWithDeepPopulation();
      return getWorkProgramSlider(
        workPrograms.data.data.filter((wp: any) => wp.id != match?.params.id),
        component.title
      );
    }
    case SharedComponents.RICH_TEXT_EDITOR: {
      return (
        <RichTextComponent
          key={`rte_${component.id}`}
          content={component.content}
          narrow={false}
        />
      );
    }
  }
};

export default WorkProgramPageMapper;
