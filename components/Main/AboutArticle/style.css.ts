import { style } from "@vanilla-extract/css";

export const Layout = style({
  display: "flex",
  flexDirection: "column",
  width: "60%",
  minWidth: "60%",
  margin: "0 auto",
});

export const Title = style({
  fontSize: "2.5rem",
  marginBottom: "2rem",
  fontWeight: "bold",
  color: "black",
});

export const Desc = style({
  fontSize: "1.2rem",
  lineHeight: "160%",
  marginBottom: "3rem",
  color: "black",
});

export const titleWrap = style({});
