import { style } from "@vanilla-extract/css";

const baseArrow = style({
  position: "absolute",
  width: "100px",
  bottom: "5vh",
  backgroundColor: "inherit",
  border: "none",
  cursor: "pointer",
  zIndex: "10",
});

export const RightArrow = style([baseArrow, { right: "35vw" }]);

export const LeftArrow = style([baseArrow, { left: "35vw" }]);
