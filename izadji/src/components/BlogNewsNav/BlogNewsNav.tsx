import styles from './BlogNewsNav.module.scss';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import customDropdown from '../../utils/customDropdown';

type WorkProgrammeInfo = {
  title: string;
  id: number;
};

export type BlogNewsNavProps = {
  onFilterChange: (programmeId: number, searchString: string) => void;
};

const BlogNewsNav = ({ onFilterChange }: BlogNewsNavProps) => {
  const { register, handleSubmit } = useForm();
  const searchInput = useRef<HTMLInputElement>(null);
  const [workProgrammes, setWorkProgrammes] = useState<WorkProgrammeInfo[]>([
    { title: 'title', id: 1 },
    { title: 'other', id: 2 },
  ]);
  const [selectedWorkProgramme, setSelectedWorkProgramme] =
    useState<WorkProgrammeInfo>(workProgrammes[0]);

  useEffect(() => {
    onFilterChange(selectedWorkProgramme.id, searchInput.current?.value ?? '');
  }, [selectedWorkProgramme]);

  const customDropdownInstance = useRef(customDropdown(styles));

  return (
    <div className={styles.blog__landing__nav}>
      <div className={styles.wrap}>
        <div className={styles.blog__landing__nav__inner}>
          <form
            className={styles.blog__landing__nav__search}
            onSubmit={handleSubmit(() =>
              onFilterChange(
                selectedWorkProgramme.id,
                searchInput.current?.value ?? ''
              )
            )}
          >
            <label htmlFor="blogSearch" className={styles.sr__only}>
              Pretraži
            </label>
            <input
              {...register('blogSearch')}
              ref={searchInput}
              type="text"
              id="blogSearch"
              className={styles.blog__landing__nav__input}
              placeholder="Pretraži"
            />
            <button type="submit" className={styles.blog__landing__nav__submit}>
              <span className={styles.sr__only}>Pretraži</span>
            </button>
          </form>

          <div
            className={`${styles.blog__landing__nav__dropdown} ${styles.dropdown} js-dropdown`}
          >
            <button
              type="button"
              className={`${styles.dropdown__btn} js-dropdown-btn`}
              onClick={({ target }) => {
                console.log('dropdown click');
                customDropdownInstance.current.toggleDropdown(
                  target as Element
                );
              }}
            >
              {selectedWorkProgramme.title}
            </button>
            <ul className={`${styles.dropdown__list} js-dropdown-list`}>
              {workProgrammes.map((wp) => (
                <li key={wp.id} className={styles.dropdown__item}>
                  <button
                    className={`${styles.dropdown__link} js-dropdown-link}`}
                    type="button"
                    onClick={({ target }) => {
                      customDropdownInstance.current.selectItem(
                        target as Element
                      );
                      setSelectedWorkProgramme(wp);
                    }}
                  >
                    {wp.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNewsNav;
