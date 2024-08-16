"use client";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Image from "next/image";

export default function CourseMainVideo() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  return (
    <motion.div
      ref={ref}
      initial={{opacity: 0, y: 50}}
      animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
      transition={{duration: 0.7}}
    >
      <Image
        className="max-container lg:mb-[150px] mb-[50px]"
        src="/videoHome.svg"
        width={1596}
        height={790}
        alt="Video img"
      />
    </motion.div>
  );
}
