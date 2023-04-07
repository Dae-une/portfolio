import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const Items = style({
  borderBottom: "1px solid #34373d",
});

export const stackWrapper = style({
  cursor: "pointer",
  paddingTop: "1.2rem",
  display: "flex",
});

export const stack = style({
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const Label = style({
  textAlign: "left",
  fontSize: "1.2rem",
  padding: "0 0.5rem",
});

export const reasonWrap = style({
  overflow: "hidden",
});

export const reason = style({
  padding: "1rem",
  fontSize: "1rem",
  lineHeight: "150%",
});

export const chevron = recipe({
  base: {
    transition: "transform 0.2s",
  },
  variants: {
    open: {
      true: { transform: "rotate(180deg)" },
      false: { transform: "rotate(0deg)" },
    },
  },
});
