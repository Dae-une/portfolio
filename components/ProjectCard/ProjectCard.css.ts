import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const Card = recipe({
  base: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "white",
    padding: "0",
    margin: "0",
    textAlign: "left",
    gridColumnEnd: "span 2",
    cursor: "pointer",
    border: "7px solid black",
  },
  variants: {
    margin: {
      left: { marginLeft: "15rem" },
      right: { marginRight: "15rem" },
    },
  },
});

export const Banner = style({
  width: "100%",
  height: "100%",
});
