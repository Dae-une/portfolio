import { style } from "@vanilla-extract/css";

export const Overlay = style({
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: "0",
  left: "0",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
});

export const Frame = style({
  width: "1020px",
  maxWidth: "100%",
  height: "70%",
  boxSizing: "border-box",
  backgroundColor: "#FEFDFF",
  boxShadow: "0 0 0 10px black inset",
  margin: "auto",
});

export const Layout = style({
  padding: "3rem 2rem",
  height: "calc(100% - 6rem)",
  display: "grid",
  gridTemplateColumns: "1fr 1.5fr",
  color: "#212124",
  gap: "2rem",
});

export const Image = style({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
});

export const Article = style({
  height: "100%",
  overflowY: "auto",
});

export const Title = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2.5rem",
  marginBottom: "1.5rem",
});

export const Desc = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
