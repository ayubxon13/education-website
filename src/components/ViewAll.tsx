"use client";
import BtnPrimary from "./Btn/BtnPrimary";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

type thisProps = {
  title: string;
  desc: string;
};

export default function ViewAll({desc, title}: thisProps) {
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
      className="2xl:flex block items-end justify-between mb-20"
    >
      <div className="max-w-[1177px] w-full">
        <p className="font-semibold lg:text-[48px] md:text-[38px] text-[28px] text-[#262626]">
          {title}
        </p>
        <p className="lg:text-[18px] mt-[6px] 2xl:mb-0 mb-5 md:text-base text-sm text-[#59595A]">
          {desc}
        </p>
      </div>
      <BtnPrimary text="Monthly" fontW="500" />
    </motion.div>
  );
}
