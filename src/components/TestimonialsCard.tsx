import Image from "next/image";
import Btn from "./Btn";

export default function TestimonialsCard() {
  return (
    <div className="bg-[#FFFFFF] rounded-xl border border-[#F1F1F3]">
      <p className="text-lg text-[#4C4C4D] p-[50px]">
        The web design course provided a solid foundation for me. The
        instructors were knowledgeable and supportive, and the interactive
        learning environment was engaging. I highly recommend it!
      </p>
      <hr className="border border-[#F1F1F3]" />
      <div className="flex justify-between mx-[50px] my-8 items-center">
        <div className="flex gap-[15px] items-center">
          <Image width={60} height={60} src="/userImg.png" alt="user img" />
          <p className="text-[#333333] text-lg font-semibold">Sarah L</p>
        </div>
        <Btn
          fontW="500"
          color="#F7F7F8"
          textColor="#262626"
          text="Read Full Story"
        />
      </div>
    </div>
  );
}
