"use client";
import Image from "next/image";
import BtnPrimary from "./Btn/BtnPrimary";
import BtnSecondary from "./Btn/BtnSecondary";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {ReactTyped} from "react-typed";

export default function HomeMainTitle() {
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
      className="grid justify-center mx-8"
    >
      <div className="lg:py-[14px] py-3 lg:px-5 px-3 gap-[10px] justify-start rounded-[11px] bg-[#FCFCFD] flex items-center">
        <Image
          className="lg:w-[62px] lg:h-[62px] w-12 h-12"
          width={62}
          height={62}
          src="/iconFlash.svg"
          alt="Flash icon"
        />
        <h1 className="font-semibold lg:text-5xl sm:text-3xl text-base">
          <span className="text-[#FF9500]">Unlock</span>{" "}
          <ReactTyped
            backSpeed={10}
            strings={["Your Creative Potential"]}
            typeSpeed={60}
            loop
          />
        </h1>
      </div>
      <p className="text-center text-[#262626] lg:text-[38px] sm:text-[28px] text-2xl font-medium lg:mt-5 mt-4">
        with Online Design and Development Courses.
      </p>
      <p className="text-[#262626] lg:text-lg sm:text-base text-sm text-center lg:mt-[10px] mt-[6px]">
        Learn from Industry Experts and Enhance Your Skills.
      </p>
      <div className="flex gap-3 justify-center lg:mt-[60px] mt-[50px]">
        <BtnPrimary text="Explore Courses" fontW="600" />

        <BtnSecondary text="View Pricing" fontW="500" />
      </div>
    </motion.div>
  );
}
