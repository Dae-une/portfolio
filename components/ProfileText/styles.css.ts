import { style } from "@vanilla-extract/css";

export const TextContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  position: "absolute",
  top: "15rem",
  left: "10rem",
  zIndex: "10",
});

export const TitleContainer = style({
  paddingTop: "2.2rem",
});

export const TitleWrap = style({
  position: "relative",
  fontSize: "3rem",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundImage:
    " linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);",
});

export const subTitleText = style({
  fontSize: "2rem",
});
