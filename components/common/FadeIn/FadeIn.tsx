import React from "react";
import { SimpleReveal } from "simple-reveal";
import "simple-reveal/index.css";

type Props = {
  children: React.ReactNode;
  duration: number;
  delay: number;
};

function FadeIn({ children, duration, delay }: Props) {
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
    />
  );
}

export default FadeIn;
