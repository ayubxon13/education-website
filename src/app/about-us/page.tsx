import BtnPrimary from "@/components/Btn/BtnPrimary";
import CoursesMainTitle from "@/components/CoursesMainTitle";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <CoursesMainTitle />
      <div className="max-container">
        <h3 className="font-medium text-5xl text-[#333333]">Achievements</h3>
        <p className="text-lg text-[#59595A] mt-[6px] mb-20">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5 mb-[177px]">
          {Array.from({length: 4}).map((_, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] lg:p-[50px] md:p-10 p-[30px] rounded-xl"
            >
              <div className="border border-[#FFEACC] w-max rounded-lg bg-[#FFF9F0] lg:p-4 p-[14px]">
                <Image
                  className="lg:w-[34px] lg:h-[34px] w-7 h-7"
                  width={34}
                  height={34}
                  src="/crown.svg"
                  alt="crown img"
                />
              </div>
              <div className="lg:mt-[30px] mt-6 grid lg:gap-y-[14px] md:gap-y-[10px] gap-y-[6px]">
                <h5 className="font-medium lg:text-2xl md:text-xl text-lg text-[#262626]">
                  Trusted by Thousands
                </h5>
                <p className="text-[#59595A] lg:text-lg md:text-base text-sm">
                  We have successfully served thousands of students, helping
                  them unlock their potential and achieve their career goals.
                </p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="font-medium text-5xl text-[#333333]">Achievements</h3>
        <p className="text-lg text-[#59595A] mt-[6px] mb-20">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5 md:mb-20 mb-[60px]">
          {Array.from({length: 4}).map(() => (
            <div className="bg-[#FFFFFF] lg:p-[50px] md:p-10 p-[30px] rounded-xl">
              <div className="border border-[#FFEACC] w-max rounded-lg bg-[#FFF9F0] lg:p-4 p-[14px]">
                <Image
                  className="lg:w-[34px] lg:h-[34px] w-7 h-7"
                  width={34}
                  height={34}
                  src="/crown.svg"
                  alt="crown img"
                />
              </div>
              <div className="lg:mt-[30px] mt-6 grid lg:gap-y-[14px] md:gap-y-[10px] gap-y-[6px]">
                <h5 className="font-medium lg:text-2xl md:text-xl text-lg text-[#262626]">
                  Trusted by Thousands
                </h5>
                <p className="text-[#59595A] lg:text-lg md:text-base text-sm">
                  We have successfully served thousands of students, helping
                  them unlock their potential and achieve their career goals.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#FFFFFF] lg:mb-[150px] md:mb-[100px] mb-[50px] xl:flex justify-between items-center lg:p-20 md:p-[60px] p-[30px] bg-no-repeat bg-right rounded-xl">
          <div className="xl:mb-0 mb-10">
            <p className="font-semibold lg:text-[48px] md:text-[38px] text-[28px] text-[#262626]">
              <span className="text-[#FF9500]">Together</span>, let's shape the
              future of digital innovation
            </p>
            <p className="text-[#4C4C4D] lg:text-lg md:text-base text-sm lg:mt-5 md:mt-[14px] mt-[10px]">
              Join us on this exciting learning journey and unlock your
              potential in design and development.
            </p>
          </div>
          <BtnPrimary text="Join Now" fontW="600" />
        </div>
      </div>
    </>
  );
}
