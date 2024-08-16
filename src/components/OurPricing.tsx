"use client";
import BtnPrimary from "./Btn/BtnPrimary";
import BtnSecondary from "./Btn/BtnSecondary";
import CoursePriceCard from "./CoursePriceCard";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function OurPricing() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section className="max-container pt-0 lg:mb-[150px] md:mb-[100px] mb-[50px]">
      <motion.div
        ref={ref}
        initial={{opacity: 0, y: 50}}
        animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
        transition={{duration: 0.7}}
        className="2xl:flex block items-end justify-between mb-20"
      >
        <div className="max-w-[1177px] w-full">
          <p className="font-semibold lg:text-[48px] md:text-[38px] text-[28px] text-[#262626]">
            Our Pricing
          </p>
          <p className="lg:text-[18px] mt-[6px] 2xl:mb-0 mb-5 md:text-base text-sm text-[#59595A]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="p-3 bg-[#FFFFFF] gap-2 w-min flex rounded-lg">
          <BtnPrimary fontW="500" text="Monthly" />
          <BtnSecondary text="Yearly" fontW="500" />
        </div>
      </motion.div>
      <CoursePriceCard />
    </section>
  );
}
