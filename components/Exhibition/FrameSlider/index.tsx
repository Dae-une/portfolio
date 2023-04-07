import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Painting from "../Painting";
import PROJECTS from "../../../public/Static/Project/ProjectArticle";
import { NextArrow, PrevArrow } from "../SliderArrows";
import * as styles from "./FrameSlider.css";
import Close from "../../../public/Images/close.svg";

const FrameSlider = () => {
  const router = useRouter();
  const param = router.query.project;
  const index = PROJECTS.findIndex(project => project.param === param);
  const [light, setLight] = useState(false);

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: index,
    accessibility: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0 },
  };

  const transition = {
    duration: 2,
    ease: [0, 0, 0, 0, 1],
  };

  const onClickGoBack = () => {
    router.back();
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!light) {
      timer = setTimeout(() => {
        setLight(true);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Slider {...settings}>
        {PROJECTS.map(project => (
          <Painting key={project.title} project={project} />
        ))}
      </Slider>
      <motion.div
        variants={variants}
        transition={transition}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.Lgiht({ light })} />
      </motion.div>
      <button className={styles.Close} type="button" onClick={onClickGoBack}>
        <Close />
        CLOSE
      </button>
    </>
  );
};

export default FrameSlider;
