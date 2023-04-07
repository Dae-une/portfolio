import { useEffect, useRef, useState } from "react";
import About from "../components/Main/About";
import Footer from "../components/Main/Footer";
import Header from "../components/Main/Header";
import Profile from "../components/Main/Profile";
import Project from "../components/Main/Project";

function Home() {
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const rect = scrollRef.current.getBoundingClientRect();
      if (rect.top <= -764) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollY = sessionStorage.getItem("scroll");

    if (scrollY) {
      window.scrollTo(0, Number(scrollY));
    }
  }, []);

  return (
    <div ref={scrollRef}>
      <Header visible={visible} />
      <Profile />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
