import styles from './Donate.module.scss';
import customDropdown from '../../utils/customDropdown';

import DonationProject, {
  DonationProjectProps,
} from '../DonationProject/DonationProject';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export type DonateProps = {
  title: string;
  text: string;
  donationProjects: DonationProjectProps[];
};

const Donate = ({
  title,
  text,
  donationProjects,
}: DonateProps): JSX.Element => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(donationProjects[0]);
  const customDropdownInstance = customDropdown(styles);

  return (
    <div className={styles.donation}>
      <div className={styles.donation__picker}>
        <div className={styles.donation__picker__inner}>
          {title && <h2 className={styles.donation__title}>{title}</h2>}
          {text && <p className={styles.donation__text}>{text}</p>}
          <div className={`${styles.dropdown} js-dropdown`}>
            <button
              type={'button'}
              className={`${styles.dropdown__btn} js-dropdown-btn`}
              onClick={({ target }) =>
                customDropdownInstance.toggleDropdown(target as Element)
              }
            >
              {selectedProject.projectName}
            </button>
            <ul className={`${styles.dropdown__list} js-dropdown-list`}>
              {donationProjects.map((project) => (
                <li
                  className={styles.dropdown__item}
                  key={project.projectPageId}
                >
                  <button
                    onClick={({ target }) => {
                      customDropdownInstance.selectItem(target as Element);
                      setSelectedProject(project);
                    }}
                    className={`${styles.dropdown__link} js-dropdown-link`}
                  >
                    {project.projectName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => {
              navigate(`/project/${selectedProject.projectPageId}`);
            }}
            className={styles.btn}
          >
            Vidi informacije
          </button>
        </div>
      </div>
      <DonationProject {...selectedProject} />
    </div>
  );
};

export default Donate;
