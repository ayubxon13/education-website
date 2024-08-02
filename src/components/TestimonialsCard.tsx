import Image from "next/image";
import BtnSecondary from "./Btn/BtnSecondary";
export default function TestimonialsCard() {
  return (
    <div className="bg-[#FFFFFF] rounded-xl border border-[#F1F1F3]">
      <p className="text-lg text-[#4C4C4D] lg:p-[50px] sm:p-10 p-[30px]">
        The web design course provided a solid foundation for me. The
        instructors were knowledgeable and supportive, and the interactive
        learning environment was engaging. I highly recommend it!
      </p>
      <hr className="border border-[#F1F1F3]" />
      <div className="flex justify-between lg:mx-[50px] sm:mx-10 mx-[30px] lg:my-8 sm:my-6 my-5 items-center">
        <div className="flex gap-[15px] items-center">
          <Image
            className="lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]"
            width={60}
            height={60}
            src="/userImg.png"
            alt="user img"
          />
          <p className="text-[#333333] lg:text-lg text-base font-semibold">
            Sarah L
          </p>
        </div>
        <BtnSecondary text="Read Full Story"  fontW="500"/>
      </div>
    </div>
  );
}
