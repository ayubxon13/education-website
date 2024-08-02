import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/20/solid";
import Image from "next/image";

export default function StudentsTestimonials() {
  return (
    <div className="max-w-[829px] w-full">
      <h4 className="text-[#262626] font-medium lg:text-[38px] md:text-3xl text-[28px]">
        Students Testimonials
      </h4>
      <p className="lg:text-lg md:text-base text-sm text-[#59595A] lg:mt-[6px] mt-1">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </p>
      <div className="bg-[#FFFFFF] mt-20 border boder-[#F1F1F3] rounded-xl">
        <p className="lg:p-[50px] md:p-10 p-[30px] text-[#4C4C4D] lg:text-lg md:text-base text-sm">
          The web design course provided a solid foundation for me. The
          instructors were knowledgeable and supportive, and the interactive
          learning environment was engaging. I highly recommend it!
        </p>
        <hr />
        <div className="lg:px-[50px] md:px-10 px-[30px] flex items-center justify-between lg:py-[30px] md:py-6 py-5">
          <div className="flex items-center lg:gap-[15px] gap-[10px]">
            <Image
              className="lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]"
              width={60}
              height={60}
              src="/userImg.png"
              alt="user img"
            />
            <p className="font-semibold lg:text-lg text-[#333333]">Sarah L</p>
          </div>
          <button className="bg-[#F7F7F8] hover:bg-opacity-65 active:bg-[#E0E0E0] border border-[#F1F1F3] font-medium lg:text-lg lg:py-[18px] text-sm py-[14px] lg:px-6 px-[16px] rounded-lg">
            Read More
          </button>
        </div>
      </div>
      <div className="justify-end w-full flex gap-[15px] mt-[30px]">
        <button className="p-[14px] hover:bg-opacity-65 active:bg-[#E0E0E0] bg-[#FFFFFF] rounded-lg border border-[#F1F1F3]">
          <ArrowLeftIcon className="w-[24px] h-[24px]" />
        </button>
        <button className="p-[14px] hover:bg-opacity-65 active:bg-[#E0E0E0] bg-[#FFFFFF] rounded-lg border border-[#F1F1F3]">
          <ArrowRightIcon className="w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  );
}
