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
