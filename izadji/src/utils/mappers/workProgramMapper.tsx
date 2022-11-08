import { ReactNode } from 'react';
import { WorkProgrammeCardProps } from '../../components/WorkProgrammeCard/WorkProgrammeCard';
import WorkProgrammeSlider from '../../components/WorkProgrammeSlider/WorkProgrammeSlider';

const getWorkProgramSlides = (workPrograms: any): WorkProgrammeCardProps[] => {
  return workPrograms.map((workProgramData: any) => {
    return {
      link: `/work-programs/${workProgramData.id}`,
      heading: workProgramData.attributes.banner.title,
      description: `${workProgramData.attributes.banner.text.slice(0, 200)}...`,
    };
  });
};

export const getWorkProgramSlider = (
  workPrograms: any,
  heading: string
): ReactNode => {
  return (
    <WorkProgrammeSlider
      key={`work_programmer_slider`}
      heading={heading}
      slides={getWorkProgramSlides(workPrograms)}
    />
  );
};
