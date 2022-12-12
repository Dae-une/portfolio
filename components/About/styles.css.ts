import { style } from "@vanilla-extract/css";

export const aboutSection = style({
  height: "100vh",
  overflow: "hidden",
  position: "relative",
  marginInline: "5rem",
  paddingTop: "10rem",
  display: "flex",
  gap: "5rem",
});

export const textWrap = style({
  width: "30%",
  position: "relative",
});

export const aboutTitle = style({
  fontSize: "3.75rem",
  margin: "0 auto",
  textAlign: "left",
  position: "absolute",
  top: "0",
  left: "0",
});

export const ArticleWrap = style({
  maxWidth: "50rem",
});

const baseDim = style({
  background: "linear-gradient(0deg,rgba(33,33,36,0),#212124)",
  zIndex: "100",
  height: "6.875rem",
  position: "absolute",
  width: "100%",
});

export const topDim = style([baseDim, { top: "0" }]);
