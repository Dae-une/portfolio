import { style } from "@vanilla-extract/css";

export const projectSection = style({
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

export const projectTitle = style({
  fontSize: "3.75rem",
  margin: "0 auto",
  textAlign: "left",
  position: "sticky",
  top: "0",
  left: "0",
});

export const articleWrap = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});
