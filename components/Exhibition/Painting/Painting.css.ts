import { style } from "@vanilla-extract/css";

export const Flex = style({
  display: "flex",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
});

export const Frame = style({
  width: "1020px",
  maxWidth: "100%",
  height: "70vh",
  maxHeight: "580px",
  boxSizing: "border-box",
  backgroundColor: "#FEFDFF",

  boxShadow: "0 0 0 10px black inset",
});

export const Header = style({
  marginBottom: "3.5rem",
});

export const Layout = style({
  padding: "3rem 2rem",
  height: "100%",
  color: "#212124",
  overflow: "hidden",
});

export const Image = style({
  display: "flex",
  position: "relative",
});

export const Article = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  height: "calc(100% - 14rem)",
  overflow: "auto",
});

export const Texts = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  height: "100%",
  overflow: "auto",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const Title = style({
  fontSize: "26px",
});

export const Desc = style({
  fontSize: "14px",
  color: "#6D6D6D",
});
