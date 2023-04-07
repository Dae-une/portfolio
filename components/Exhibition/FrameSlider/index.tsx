import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useRouter } from "next/router";
import Painting from "../Painting";
import PROJECTS from "../../../public/Static/Project/ProjectArticle";

const FrameSlider = () => {
  const router = useRouter();
  const param = router.query.project;
  console.log(param);
  const index = PROJECTS.findIndex(project => project.param === param);

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: index,
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
