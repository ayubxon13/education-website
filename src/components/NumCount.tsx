import React, {useState, useEffect} from "react";
import {useInView} from "react-intersection-observer";
import CountUp from "react-countup";

interface CountUpComponentProps {
  endValue: number;
}

export default function NumCount({endValue}: CountUpComponentProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const {ref, inView} = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    setShouldAnimate(inView);
  }, [inView]);

  return (
    <span ref={ref}>
      {shouldAnimate ? <CountUp end={endValue} duration={2} /> : `${endValue}`}
    </span>
  );
}
