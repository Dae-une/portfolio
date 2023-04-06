import { style } from "@vanilla-extract/css";

export const ProjectSection = style({
  display: "flex",
  height: "100vh",
  backgroundColor: "#292831",
});

export const ProjectContainer = style({
  display: "grid",
  gridTemplateRows: " repeat(2, minmax(200px, auto))",
  gridTemplateColumns: " repeat(8, minmax(150px, auto))",
  gridAutoFlow: "column",
  padding: "10rem",
  columnGap: "10rem",
  rowGap: "5rem",
});
