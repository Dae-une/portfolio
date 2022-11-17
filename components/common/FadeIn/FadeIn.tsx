import React from 'react';
import { SimpleReveal } from 'simple-reveal';
import 'simple-reveal/index.css';

const FadeIn = ({ children, duration, delay }) => {
  return (
    <SimpleReveal
      render={({ ref, cn, style }) => (
        <div ref={ref} className={cn()} style={style}>
          {children}
        </div>
      )}
      duration={duration}
      delay={delay}
      initialTransform="translateY(60px)"
    ></SimpleReveal>
  );
};

export default FadeIn;
