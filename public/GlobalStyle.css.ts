import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: "0",
  backgroundColor: "#212124",
  color: "white",
  overflowX: "hidden",
});

globalStyle("body, h1, h2, h3, h4, h5, h6, p, span", {
  fontSize: "100%",
  letterSpacing: "-0.02em",
  margin: "0",
  padding: "0",
  wordBreak: "keep-all",
});
