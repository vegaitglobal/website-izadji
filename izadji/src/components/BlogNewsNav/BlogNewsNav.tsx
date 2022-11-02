import styles from './BlogNewsNav.module.scss';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import customDropdown from '../../utils/customDropdown';
import workProgramService from '../../services/workProgramService';
import { BlogNewsBannerProps } from '../BlogNewsBanner/BlogNewsBanner';
import { routes } from '../../routes';

export type WorkProgrammeInfo = {
  title: string;
  id: number;
  featuredBlogPage?: BlogNewsBannerProps;
};

export type BlogNewsNavProps = {
  onFilterChange: (
    workProgramme: WorkProgrammeInfo,
    searchString: string
  ) => void;
};

const BlogNewsNav = ({ onFilterChange }: BlogNewsNavProps) => {
  const { register, handleSubmit } = useForm();
  const searchInput = useRef<HTMLInputElement>(null);
  const [workProgrammes, setWorkProgrammes] = useState<WorkProgrammeInfo[]>([]);
  const [selectedWorkProgramme, setSelectedWorkProgramme] =
    useState<WorkProgrammeInfo>({ title: 'Odaberi kategoriju', id: -1 });

  useEffect(() => {
    workProgramService
      .getWorkProgramPagesWithFeaturedBlogPage()
      .then((response) => {
        const workProgrammes = response.data.data.map((wp: any) => ({
          title: wp.attributes.title,
          id: wp.id,
          featuredBlogPage:
            wp.attributes.featuredBlogPage.data != null
              ? {
                  imageSrc:
                    wp.attributes.featuredBlogPage.data.attributes.blogBanner
                      .image.data.attributes.url,
                  title: wp.attributes.featuredBlogPage.data.attributes.title,
                  category: wp.attributes.title,
                  text: wp.attributes.featuredBlogPage.data.attributes
                    .featuredPageText,
                  url: routes.blogPage.replace(
                    ':id',
                    wp.attributes.featuredBlogPage.data.id
                  ),
                  date: new Date(
                    wp.attributes.featuredBlogPage.data.attributes.blogBanner.date
                  ).toLocaleDateString('sr-Latn-RS', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  }),
                }
              : undefined,
        }));

        setWorkProgrammes(workProgrammes);
        setSelectedWorkProgramme(workProgrammes[0]);
      });
  }, []);

  useEffect(() => {
    onFilterChange(selectedWorkProgramme, searchInput.current?.value ?? '');
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
                selectedWorkProgramme,
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
