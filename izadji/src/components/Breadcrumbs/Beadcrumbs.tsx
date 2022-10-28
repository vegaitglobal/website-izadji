import styles from './Breadcrumbs.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

export type BreadcrumbsProps = {
  crumbs: BreadcrumbItemProps[];
};

export type BreadcrumbItemProps = {
  text: string;
  url: string;
};

const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.wrap}>
        <ul className={styles.breadcrumb__list}>
          {crumbs.map((crumb, index) => (
            <li key={crumb.url} className={styles.breadcrumb__item}>
              {index == crumbs.length - 1 ? (
                crumb.text
              ) : (
                <Link to={crumb.url} className={styles.breadcrumb__link}>
                  {crumb.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
