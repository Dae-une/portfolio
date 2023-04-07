import { style } from "@vanilla-extract/css";

export const Layout = style({
  display: "flex",
  padding: "0px 1rem",
  gap: "0.5rem",
});

export const Flex = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "8px",
});

export const Line = style({
  width: "1px",
  background: "#2d2d2d",
  height: "100%",
});

export const Circle = style({
  width: "8px",
  height: "8px",
  border: "1px solid #2D2D2D",
  borderRadius: "50%",
});

export const Title = style({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "26px",
});

export const SubTitle = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  fontWeight: "600",
});

export const Desc = style({
  marginLeft: "10px",
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
  fontWeight: "400",
});
