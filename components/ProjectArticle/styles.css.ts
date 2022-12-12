import { style } from "@vanilla-extract/css";

export const articleWrap = style({
  fontSize: "1.1rem",
  lineHeight: "150%",
  marginBottom: "6rem",
  minWidth: "70%",
});

export const projectTitle = style({
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "2rem",
});

export const subtitle = style({
  fontSize: "1.5rem",
  fontWeight: "900",
  marginTop: "2rem",
  color: "#8482F2",
});

export const ulStyle = style({
  paddingInline: "20px",
});

export const linkStyle = style({
  textDecoration: "none",
  color: "white",
  ":hover": {
    color: "yellow",
  },
});
