import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Painting from "../Painting";
import PROJECTS from "../../../public/Static/Project/ProjectArticle";

const settings = {
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const FrameSlider = () => {
  return (
    <Slider {...settings}>
      {PROJECTS.map(project => (
        <Painting key={project.title} project={project} />
      ))}
    </Slider>
  );
};

export default FrameSlider;
