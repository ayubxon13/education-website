import Image from "next/image";

export default function CoursesAbout() {
  return (
    <section className="max-container pt-0 mb-[150px]">
      <div className="bg-[#FFFFFF] rounded-xl">
        <div className="p-[50px]">
          <div className="grid items-end">
            <p className="font-semibold text-2xl text-[#262626]">
              Web Design Fundamentals
            </p>
            <div className="flex gap-[50px] mt-[10px] mb-[30px]">
              <p className="text-[#59595A] text-lg max-w-[1266px] w-full">
                Learn the fundamentals of web design, including HTML, CSS, and
                responsive design principles. Develop the skills to create
                visually appealing and user-friendly websites.
              </p>
              <div>
                <button className="bg-[#FCFCFD] border rounded-lg border-[#F1F1F3] text-[#262626] font-medium text-lg py-[18px] min-w-40">
                  View Course
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-[30px]">
              <Image
                width={478}
                height={422}
                src="/courseImg.png"
                alt="course image"
              />
              <Image
                width={478}
                height={422}
                src="/courseImg.png"
                alt="course image"
              />
              <Image
                width={478}
                height={422}
                src="/courseImg.png"
                alt="course image"
              />
            </div>
            <div className="flex justify-between mt-[30px] mb-[50px] items-center">
              <div className="flex gap-[10px] items-center">
                <button className="bg-[#FCFCFD] border rounded-lg border-[#F1F1F3] text-[#59595A] text-lg py-[10px] px-4">
                  4 Weeks
                </button>
                <button className="bg-[#FCFCFD] border rounded-lg border-[#F1F1F3] text-[#59595A] text-lg py-[10px] px-4">
                  Beginner
                </button>
              </div>
              <p className="font-medium text-xl text-[#262626]">By John Smith</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
