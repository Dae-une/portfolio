import { style } from "@vanilla-extract/css";

export const aboutSection = style({
  height: "80vh",
  overflow: "hidden",
  position: "relative",
  paddingTop: "10rem",
  display: "flex",
  maxHeight: "100vh",
});

export const TitleContainer = style({
  width: "25%",
  position: "relative",
  paddingLeft: "5rem",
  paddingTop: "2rem",
});

export const Title = style({
  fontSize: "3.75rem",
  margin: "0 auto",
  textAlign: "left",
  position: "absolute",
  top: "0",
  left: "0",
});

export const ArticleContainer = style({
  width: "75%",
  backgroundColor: "#FEFDFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
});

export const ArticleWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "120px",
});

const baseDim = style({
  background: "linear-gradient(0deg,rgba(33,33,36,0),#212124)",
  zIndex: "100",
  height: "6.875rem",
  position: "absolute",
  width: "100%",
});

export const topDim = style([baseDim, { top: "0" }]);
