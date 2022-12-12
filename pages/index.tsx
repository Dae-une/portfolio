import { useEffect, useRef, useState } from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";
import Project from "../components/Project/Project";

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
