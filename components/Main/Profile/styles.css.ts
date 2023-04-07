import { style } from "@vanilla-extract/css";

export const profileContainer = style({
  display: "flex",
});

export const profileImg = style({
  width: "75vw",
  height: "100vh",
});

export const shadowBox = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
});
