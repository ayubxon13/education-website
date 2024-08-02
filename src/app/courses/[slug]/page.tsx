import CoursesMainTitle from "@/components/CoursesMainTitle";
import {ClockIcon} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CoursesSinglePage() {
  return (
    <>
      <CoursesMainTitle />
      <Image
        className="max-container lg:mb-[150px] mb-[50px]"
        src="/videoHome.svg"
        width={1596}
        height={790}
        alt="Video img"
      />
      <div className="max-container lg:mb-[120px] md:mb-[100px] mb-[50px]">
        <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-[30px]">
          {Array.from({length: 4}).map((_, idx) => (
            <div key={idx} className="bg-[#FFFFFF] lg:p-[50px] md:p-10 p-[30px]">
              <p className="lg:text-[80px] md:text-6xl text-[50px] text-[#262626] lg:font-extrabold font-bold text-right">
                01
              </p>
              <p className="text-[#333333] lg:text-2xl md:text-xl lg:mt-[50px] md:mt-10 mt-[30px] text-lg tracking-[-0.6%] font-semibold">
                Introduction to UI/UX Design
              </p>
              <div className="grid gap-5 lg:mt-[50px] md:mt-10 mt-[30px]">
                {Array.from({length: 4}).map(() => (
                  <div className="border border-[#F1F1F3] rounded-lg lg:py-6 py-5 lg:px-[30px] px-6">
                    <div className="md:flex grid gap-y-6 items-center justify-between">
                      <div className="grid gap-[6px]">
                        <p className="text-[#333333] font-medium lg:text-xl text-base">
                          Understanding UI/UX Design Principles
                        </p>
                        <p className="lg:text-lg text-sm lg:mt-[6px] mt-[2px] text-[#59595A]">
                          Lesson 01
                        </p>
                      </div>
                      <button className="bg-[#F7F7F8] flex md:min-w-max w-max items-center gap-[7px] text-[#4C4C4D] lg:py-[12px] py-[10px] lg:px-[14px] px-[10px] lg:text-lg text-sm rounded-md">
                        <ClockIcon className="lg:w-6 lg:h-6 w-5 h-5" />
                        45 minutes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
