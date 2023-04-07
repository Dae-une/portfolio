import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const Lgiht = recipe({
  base: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    zIndex: 1000,
    backgroundColor: "black",
    top: 0,
  },
  variants: {
    light: {
      true: { display: "none" },
      false: { display: "block" },
    },
  },
});

export const Close = style({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  top: "5vh",
  right: "5vw",
  padding: "5px 12px",
  border: "1px solid white",
  borderRadius: "50px",
  backgroundColor: "inherit",
  color: "white",
  cursor: "pointer",
});
