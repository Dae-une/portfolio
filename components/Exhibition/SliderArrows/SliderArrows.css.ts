import { recipe } from "@vanilla-extract/recipes";

export const RightArrow = recipe({
  base: {
    position: "absolute",
    width: "100px",
    bottom: "8vh",
    backgroundColor: "inherit",
    border: "none",
    cursor: "pointer",
    zIndex: "10",
    right: "35vw",
    transition: "opacity 1s ease",
  },
  variants: {
    isHover: {
      true: { opacity: 0.5 },
      false: { opacity: 0.2 },
    },
  },
});

export const LeftArrow = recipe({
  base: {
    position: "absolute",
    width: "100px",
    bottom: "8vh",
    backgroundColor: "inherit",
    border: "none",
    cursor: "pointer",
    zIndex: "10",
    left: "35vw",
    transition: "opacity 1s ease",
  },
  variants: {
    isHover: {
      true: { opacity: 0.5 },
      false: { opacity: 0.2 },
    },
  },
});
