import { AppProps } from "next/app";
import React from "react";
import "../public/GlobalStyle.css";

function App({ Component }: AppProps) {
  return <Component />;
}

export default App;
