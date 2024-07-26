import Image from "next/image";
import Btn from "./Btn";

export default function SiteMainTitle() {
  return (
    <div className="grid justify-center mx-8">
      <div className="lg:py-[14px] py-3 lg:px-5 px-3 gap-[10px] justify-start rounded-[11px] bg-[#FCFCFD] flex items-center">
        <Image className="lg:w-[62px] lg:h-[62px] w-12 h-12" width={62} height={62} src="/iconFlash.svg" alt="Flash icon" />
        <h1 className="font-semibold lg:text-5xl sm:text-3xl text-base">
          <span className="text-[#FF9500]">Unlock</span> Your Creative Potential
        </h1>
      </div>
      <p className="text-center text-[#262626] lg:text-[38px] sm:text-[28px] text-2xl font-medium lg:mt-5 mt-4">
        with Online Design and Development Courses.
      </p>
      <p className="text-[#262626] lg:text-lg sm:text-base text-sm text-center lg:mt-[10px] mt-[6px]">
        Learn from Industry Experts and Enhance Your Skills.
      </p>
      <div className="flex gap-3 justify-center lg:mt-[60px] mt-[50px]">
        <Btn textColor="#FFFFFF" color="#FF9500" text="Explore Courses" />
        <Btn textColor="#262626" color="#FCFCFD" text="View Pricing" />
      </div>
    </div>
  );
}
