"use client";
import BtnPrimary from "@/components/Btn/BtnPrimary";
import BtnSecondary from "@/components/Btn/BtnSecondary";
import CoursePriceCard from "@/components/CoursePriceCard";
import CoursesMainTitle from "@/components/CoursesMainTitle";
import Questions from "@/components/Questions";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
export default function Pricing() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  return (
    <>
      <CoursesMainTitle />
      <div className="max-container">
        <motion.div
          ref={ref}
          initial={{opacity: 0, y: 50}}
          animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
          transition={{duration: 0.7}}
          className="p-3 bg-[#FFFFFF] gap-2 mx-auto md:mb-[50px] mb-10 w-min flex rounded-lg"
        >
          <BtnPrimary text="Monthly" fontW="500" />
          <BtnSecondary text="Yearly" fontW="500" />
        </motion.div>
        <CoursePriceCard />
      </div>
      <div className="lg:mt-[150px] md:mt-[100px] mt-[50px]">
        <Questions />
      </div>
    </>
  );
}
