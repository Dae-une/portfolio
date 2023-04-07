import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Painting from "../Painting";
import PROJECTS from "../../../public/Static/Project/ProjectArticle";
import { NextArrow, PrevArrow } from "../SliderArrows";

const FrameSlider = () => {
  const router = useRouter();
  const param = router.query.project;
  const index = PROJECTS.findIndex(project => project.param === param);

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
    hidden: { opacity: 1, display: "block" },
    visible: { opacity: 0, diplay: "none" },
  };

  const transition = {
    duration: 3,
    easeInOut: [0, 0, 0, 0.3, 1],
  };

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
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            zIndex: 1000,
            backgroundColor: "black",
            top: 0,
          }}
        />
      </motion.div>
    </>
  );
};

export default FrameSlider;
