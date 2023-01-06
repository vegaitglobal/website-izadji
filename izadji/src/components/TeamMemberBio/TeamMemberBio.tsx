import RichTextComponent from '../RichTextComponent/RichTextComponent';
import styles from './TeamMemberBio.module.scss';

export type TeamMemberBioProps = {
  name: string;
  jobTitle: string;
  profileImage: string;
  bio: string;
};

const TeamMemberBio = ({
  name,
  jobTitle,
  profileImage,
  bio,
}: TeamMemberBioProps): JSX.Element => {
  return (
    <div className={styles.people__slider__bio}>
      <div className={styles.people__slider__bio__holder} data-num="">
        <div className={styles.people__slider__bio__container}>
          <div className={styles.people__slider__bio__item__container}>
            <div className={styles.people__slider__item__bio__holder}>
              <img
                className={`${styles.people__slider__bio__img} ${styles.has__cover}`}
                src={profileImage}
                alt={name}
              />
            </div>
            <div className={styles.people__slider__text__bio__holder}>
              <span className={styles.people__slider__bio__text__bold}>
                {name}
              </span>
              <span className={styles.people__slider__bio__text}>
                {jobTitle}
              </span>
            </div>
          </div>
        </div>
        <RichTextComponent className={styles.rte} content={bio} />
      </div>
    </div>
  );
};

export default TeamMemberBio;
