"use client";

import Image from "next/image";
import {useState} from "react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function Questions() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const itemVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0},
  };

  return (
    <motion.section
      ref={ref}
      initial={{opacity: 0, y: 50}}
      animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
      transition={{duration: 0.7}}
      className="max-container pt-0 lg:mb-[142px] md:mb-[100px] mb-[50px]"
    >
      <div className="bg-[#FFFFFF] w-full lg:p-[100px] md:p-[50px] p-6 rounded-lg 2xl:flex grid gap-y-10 gap-[120px] justify-between">
        <div className="max-w-[408px] w-full">
          <p className="text-[#262626] font-semibold lg:text-5xl md:text-[38px] text-[28px]">
            Frequently Asked Questions
          </p>
          <p className="text-[#333333] lg:text-lg md:text-base text-sm lg:mt-[10px] mt-2">
            Still you have any questions? Contact our Team via
            support@skillbridge.com
          </p>
          <button className="border border-[#F1F1F3] lg:py-[18px] py-[14px] lg:px-6 px-5  text-[#262626] bg-[#FFFFFF] rounded-lg lg:text-lg text-sm lg:mt-[50px] md:mt-10 mt-5">
            See All FAQ&apos;s
          </button>
        </div>
        <div className="w-full grid lg:gap-[120px] gap-[80px]">
          <div className="w-full grid md:gap-y-[30px] gap-y-5">
            {Array.from({length: 4}).map((_, idx) => (
              <motion.div
                key={idx}
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{duration: 0.5, delay: idx * 0.2}}
                className="border border-[#F1F1F3] text-start w-full lg:py-10 md:py-8 py-5 lg:px-[50px] md:px-10 px-6 rounded-xl"
              >
                <button className="w-full" onClick={toggleAccordion}>
                  <div className="flex justify-between md:gap-10 gap-5 w-full text-start items-center">
                    <p className="text-[#262626] lg:text-xl md:text-lg text-base font-medium">
                      Can I enroll in multiple courses at once?
                    </p>
                    <Image
                      className="lg:w-[52px] lg:h-[52px] md:w-11 md:h-11 w-10 h-10"
                      width={52}
                      height={52}
                      src={isOpen ? "/xbtn.png" : "/addbtn.png"}
                      alt={isOpen ? "Close" : "Open"}
                    />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <hr className="lg:my-9 my-7" />
                  <p className="text-[#4C4C4D] lg:text-lg text-base">
                    Absolutely! You can enroll in multiple courses
                    simultaneously and access them at your convenience.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
