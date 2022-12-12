import React from "react";
import Image from "next/image";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import * as styles from "./styles.css";
import profilePic from "../../public/Images/profile_Image.jpeg";
import useWindowInnerWidth from "../../hooks/useWindowInnerWidth";
import Links from "../Links/Links";
import ProfileText from "../ProfileText/ProfileText";

function Profile() {
  const viewportWidth = useWindowInnerWidth(-1);

  const backgroundSize =
    viewportWidth > 992 ? 140 : viewportWidth > 576 ? 108 : 80;

  return (
    <div id="Profile">
      <Controller>
        <Scene duration="100%" pin triggerHook="onLeave">
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
                      backgroundImage: `repeating-linear-gradient(90deg, #212124 0px ${backgroundSize}px, transparent 0px ${backgroundSize}px)`,
                    }}
                  />
                </Timeline>
                <ProfileText progress={progress} />
              </section>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

export default Profile;
