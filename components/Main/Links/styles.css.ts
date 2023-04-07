import { style } from "@vanilla-extract/css";

export const linkWrap = style({
  backgroundColor: "#212124",
  width: "25vw",
  color: "white",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  justifyContent: "center",
  position: "relative",
  zIndex: "10",
});

export const link = style({
  fontSize: "2.5rem",
  marginLeft: "4rem",
  cursor: "pointer",
  color: "white",
  transition: "color 0.6s",
  ":hover": {
    color: "#8482F2",
  },
  textDecoration: "none",
});

export const emailText = style({
  position: "absolute",
  bottom: "2rem",
  marginLeft: "4rem",
  marginTop: "3rem",
  fontSize: "1.1rem",
});
