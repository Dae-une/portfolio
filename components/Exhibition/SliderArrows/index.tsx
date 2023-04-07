/* eslint-disable react/prop-types */
import React from "react";
import * as styles from "./SliderArrows.css";
import LeftArrow from "../../../public/Images/left_arrow.svg";
import RightArrow from "../../../public/Images/right_arrow.svg";

export const PrevArrow = props => {
  const { onClick } = props;
  return (
    <button className={styles.LeftArrow} type="button" onClick={onClick}>
      <LeftArrow width="50px" fill="#ffffff" />
    </button>
  );
};

export const NextArrow = props => {
  const { onClick } = props;
  return (
    <button className={styles.RightArrow} type="button" onClick={onClick}>
      <RightArrow width="50px" fill="#ffffff" />
    </button>
  );
};
