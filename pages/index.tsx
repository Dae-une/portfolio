import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header/Header';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const rect = scrollRef.current.getBoundingClientRect();
      if (rect.top <= -2060) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={scrollRef}>
      <div style={{ minHeight: '10000px', backgroundColor: 'red', width: '100vw' }}>hi</div>
      <Header visible={visible} />
    </div>
  );
};

export default Home;
