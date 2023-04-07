import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useRouter } from "next/router";
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

  return (
    <Slider {...settings}>
      {PROJECTS.map(project => (
        <Painting key={project.title} project={project} />
      ))}
    </Slider>
  );
};

export default FrameSlider;
