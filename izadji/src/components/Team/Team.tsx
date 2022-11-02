import { useState } from 'react';
import TeamMemberBio from '../TeamMemberBio/TeamMemberBio';
import TeamMember, {
  TeamMemberItemProps,
} from '../TeamMemberItem/TeamMemberItem';
import styles from './Team.module.scss';

export type TeamProps = {
  heading: string;
  teamMembersList: TeamMemberItemProps[];
};

const Team = ({ heading, teamMembersList }: TeamProps): JSX.Element => {
  const [selectedTeamMember, setSelectedTeamMember] =
    useState<TeamMemberItemProps>(teamMembersList[0]);

  const teamMemberSelect = (email: string) => {
    const selectedMember = teamMembersList.find((tm) => tm.email === email);
    if (selectedMember) {
      setSelectedTeamMember(selectedMember);
    } else {
      setSelectedTeamMember(teamMembersList[0]);
    }
  };

  return (
    <section className={styles.people__slider}>
      <div className={styles.wrap}>
        <div className={styles.people__slider__container}>
          <div className={styles.people__slider__holder}>
            <h2 className={styles.people__slider__heading}>{heading}</h2>
            <div className={styles.swiper__container}>
              {/* team list */}
              <div className={styles.swiper__wrapper}>
                <div
                  className={`${styles.swiper__slide} ${styles.people__slider__slider}`}
                >
                  <div className={styles.people__slider__inner}>
                    <ul className={styles.people__slider__list}>
                      {teamMembersList.map((tm) => (
                        <TeamMember
                          onClickHandler={teamMemberSelect}
                          key={tm.email}
                          name={tm.name}
                          jobTitle={tm.jobTitle}
                          profileImage={tm.profileImage}
                          email={tm.email}
                          isActive={tm.email === selectedTeamMember.email}
                          bio={''}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.hero__slider__nav}>
                <div className={styles.swiper__pagination}></div>
              </div>
            </div>
          </div>

          {/* biography */}
          <TeamMemberBio
            name={selectedTeamMember.name}
            jobTitle={selectedTeamMember.jobTitle}
            profileImage={selectedTeamMember.profileImage}
            bio={selectedTeamMember.bio}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
