import Image from "next/image";
import CourseAuthor from "./CourseAuthor";

export default function OurCoursesCard() {
  return (
    <div className="lg:p-[50px] sm:p-10 p-6 bg-white rounded-xl">
      <Image
        className="2xl:w-[683px] 2xl:h-[380px] w-full"
        width={683}
        height={380}
        alt=""
        src="/courseImg.png"
      />

      <div className="lg:my-[30px] my-6">
        <CourseAuthor />
      </div>
      <div className="grid lg:mt-[30px] mt-6">
        <p className="text-[#262626] lg:mb-[14px] mb-[10px] font-semibold lg:text-2xl sm:text-xl text-lg">
          Web Design Fundamentals
        </p>
        <p className="sm:text-lg text-sm text-[#4C4C4D] lg:mb-[30px] mb-6">
          Learn the fundamentals of web design, including HTML, CSS, and
          responsive design principles. Develop the skills to create visually
          appealing and user-friendly websites.
        </p>
        <button className="bg-[#F7F7F8] border border-[#F1F1F3] text-[#262626] lg:text-lg text-sm rounded-lg font-medium lg:py-[18px] py-[14px]">
          Get it Now
        </button>
      </div>
    </div>
  );
}
