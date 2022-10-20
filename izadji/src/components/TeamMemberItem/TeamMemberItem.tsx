import { useState } from 'react';
import styles from './TeamMemberItem.module.scss';

export type TeamMemberItemProps = {
  name: string;
  jobTitle: string;
  profileImage: string;
  email: string;
  bio: string;
  isActive: boolean;
  onClickHandler: (email: string) => void;
};

const TeamMemberItem = ({
  name,
  jobTitle,
  profileImage,
  email,
  isActive,
  onClickHandler,
}: TeamMemberItemProps): JSX.Element => {
  return (
    <li
      onClick={() => onClickHandler(email)}
      className={isActive ? `${styles.people__slider__btn__active}` : ''}
      data-num="{index}"
    >
      <button className={styles.people__slider__item}>
        <div className={styles.people__slider__image__holder}>
          <img
            className={`${styles.people__slider_image} ${styles.has__cover}`}
            src={profileImage}
            alt={name}
          />
        </div>

        <div className={styles.people__slider__text__holder}>
          <span className={`${styles.people__slider__text__bold}`}>{name}</span>
          <span className={`${styles.people__slider__text}`}>{jobTitle}</span>
        </div>
        <a
          className={styles.people__slider__social__holder}
          href={`mailto:${email}`}
        >
          <span className={`${styles.people__slider__social}`}></span>
        </a>
      </button>
    </li>
  );
};

export default TeamMemberItem;
