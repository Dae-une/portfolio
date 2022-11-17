import React from 'react';
import Image from 'next/image';
import * as styles from './styles.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import profilePic from '../../public/Images/profile_Image.jpeg';
import useWindowInnerWidth from '../../hooks/useWindowInnerWidth';
import Links from '../Links/Links';
import ProfileText from '../ProfileText/ProfileText';

const Profile = () => {
  const viewportWidth = useWindowInnerWidth(-1);

  const backgroundSize = viewportWidth > 992 ? 140 : viewportWidth > 576 ? 108 : 80;
  const transparentOffset = backgroundSize;
  return (
    <Controller>
      <Scene duration={2000} pin triggerHook="onLeave">
        {(progress: number) => (
          <div>
            <section className={styles.profileContainer}>
              <Links />
              <Image
                width={300}
                height={300}
                className={styles.profileImg}
                src={profilePic}
                alt="profile"
              />
              <Timeline
                target={<div className={styles.shadowBox} />}
                totalProgress={progress}
                paused
              >
                <Tween
                  from={{
                    backgroundImage: `repeating-linear-gradient(90deg, #212124 0px 0px, transparent 0px ${backgroundSize}px)`,
                  }}
                  to={{
                    backgroundImage: `repeating-linear-gradient(90deg, #212124 0px ${transparentOffset}px, transparent 0px ${backgroundSize}px)`,
                  }}
                />
              </Timeline>
              <ProfileText progress={progress} />
            </section>
          </div>
        )}
      </Scene>
    </Controller>
  );
};

export default Profile;
