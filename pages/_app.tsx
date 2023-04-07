import { AppProps } from "next/app";
import React, { useEffect } from "react";
import "../public/GlobalStyle.css";

function App({ Component }: AppProps) {
  useEffect(() => {
    const reload = () => {
      window.location.reload();
    };
    window.addEventListener("resize", reload);
    return () => window.removeEventListener("resize", reload);
  });

  return <Component />;
}

export default App;
