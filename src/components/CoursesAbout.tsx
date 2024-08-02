import Image from "next/image";
import CourseAuthor from "./CourseAuthor";
import Link from "next/link";

export default function CoursesAbout() {
  return (
    <section className="max-container pt-0 mb-[50px]">
      <div className="bg-[#FFFFFF] rounded-xl">
        <div className="lg:p-[50px] md:p-10 p-6">
          <div className="grid items-end">
            <p className="font-semibold lg:text-2xl md:text-xl text-lg text-[#262626]">
              Web Design Fundamentals
            </p>
            <div className="lg:flex grid gap-y-5 gap-x-[50px] lg:mt-[10px] md:mt-[6px] mt-1 lg:mb-[30px] mb-6 ">
              <p className="text-[#59595A] lg:text-lg md:text-base text-sm max-w-[1266px] w-full">
                Learn the fundamentals of web design, including HTML, CSS, and
                responsive design principles. Develop the skills to create
                visually appealing and user-friendly websites.
              </p>
              <div>
                <Link href="/courses/1">
                  <button className="bg-[#FCFCFD]  border rounded-lg border-[#F1F1F3] text-[#262626] font-medium lg:text-lg text-sm lg:py-[18px] py-[14px] lg:min-w-40 min-w-[119px]">
                    View Course
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:gap-[30px] md:gap-5 gap-[10px]">
              <Image
                className="w-full"
                width={478}
                height={422}
                src="/courseImg.png"
                alt="course image"
              />
              <Image
                className="w-full"
                width={478}
                height={422}
                src="/courseImg.png"
                alt="course image"
              />
              <Image
                className="w-full"
                width={478}
                height={422}
                src="/courseImg.png"
                alt="course image"
              />
            </div>
            <div className="lg:mt-[30px] mt-6 lg:mb-[50px] mb-10">
              <CourseAuthor />
            </div>
            <div className="border border-[#F1F1F3] rounded-[10px]">
              <div>
                <p className="font-semibold lg:text-[22px] text-lg lg:px-[30px] md:px-6 px-5 lg:py-6 md:py-5 py-[14px]">
                  Curriculum
                </p>
                <hr />
              </div>
              <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[50px] justify-center justify-items-center lg:py-[30px] py-6 lg:px-[50px] md:px-10 px-6">
                {Array.from({length: 5}, (_, idx) => idx + 1).map((idx) => {
                  return (
                    <div key={idx} className="flex items-center gap-[50px]">
                      <div className="grid lg:gap-5 md:gap-4 gap-3">
                        <h4 className="text-[#262626] lg:text-[50px] text-[40px] font-extrabold">
                          0{idx}
                        </h4>
                        <p className="lg:text-lg text-base font-medium text-[#333333]">
                          Introduction to UI/UX Design
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
