import Image from "next/image";
import Link from "next/link";

export default function CoursePriceCard() {
  return (
    <div className="bg-[#FFFFFF] lg:p-20 md:p-[50px] p-5 gap-[30px] grid 2xl:grid-cols-2 grid-cols-1 rounded-xl">
      <div className="bg-[#FCFCFD] grid rounded-xl border border-[#F1F1F3] lg:px-[30px] md:px-6 px-5 lg:pt-[50px] md:pt-10 pt-[30px] lg:pb-[30px] md:pb-6 pb-5">
        <div className="bg-[#FFF9F0] rounded-md border border-[#FFEACC] text-center lg:py-3 md:py-[10px] py-2 text-[#262626] font-medium lg:text-[22px] md:text-lg text-base">
          Free Plan
        </div>
        <p className="font-semibold lg:text-[80px] md:text-6xl text-[50px] text-[#262626] text-center lg:mt-[50px] mt-[30px]">
          $0
          <span className="font-medium lg:text-xl md:text-base text-sm text-[#4C4C4D]">
            /month
          </span>
        </p>
        <div className="bg-[#FFFFFF] rounded-t-[14px] lg:mt-[50px] mt-[30px] border border-[#F1F1F3]">
          <p className="font-medium lg:text-xl text-lg text-[#262626] lg:mt-10 md:mt-[30px] mt-[20px] lg:mb-[30px] mb-5 text-center">
            Available Features
          </p>
          <div className="grid gap-5 lg:mx-[70px] md:mx-[60px] mx-5 mb-10">
            <div className="lg:p-[14px] p-3 flex items-center gap-3 rounded-lg border border-[#F1F1F3]">
              <Image
                className="lg:w-8 lg:h-8 w-6 h-6"
                width={32}
                height={32}
                src="/check.png"
                alt="check icon"
              />
              <p className="lg:text-lg text-sm text-[#4C4C4D]">
                Access to selected free courses.
              </p>
            </div>
            <div className="lg:p-[14px] p-3 flex items-center gap-3 rounded-lg border border-[#F1F1F3]">
              <Image
                className="lg:w-8 lg:h-8 w-6 h-6"
                width={32}
                height={32}
                src="/check.png"
                alt="check icon"
              />
              <p className="lg:text-lg text-sm text-[#4C4C4D]">
                Access to selected free courses.
              </p>
            </div>
            <div className="lg:p-[14px] p-3 flex items-center gap-3 rounded-lg border border-[#F1F1F3]">
              <Image
                className="lg:w-8 lg:h-8 w-6 h-6"
                width={32}
                height={32}
                src="/check.png"
                alt="check icon"
              />
              <p className="lg:text-lg text-sm text-[#4C4C4D]">
                Access to selected free courses.
              </p>
            </div>
            <div className="lg:p-[14px] p-3 flex items-center gap-3 rounded-lg border border-[#F1F1F3]">
              <Image
                className="lg:w-8 lg:h-8 w-6 h-6"
                width={32}
                height={32}
                src="/check.png"
                alt="check icon"
              />
              <p className="lg:text-lg text-sm text-[#4C4C4D]">
                Access to selected free courses.
              </p>
            </div>
            <div className="lg:p-[14px] p-3 flex items-center gap-3 rounded-lg border border-[#F1F1F3]">
              <Image
                className="lg:w-8 lg:h-8 w-6 h-6"
                width={32}
                height={32}
                src="/check.png"
                alt="check icon"
              />
              <p className="lg:text-lg text-sm text-[#4C4C4D]">
                Access to selected free courses.
              </p>
            </div>
          </div>
          <Link href="/courses">
            <button className="bg-[#FF9500] hover:bg-opacity-75 active:bg-[#E68A00] transition-all rounded-b-lg text-[#FFFFFF] font-semibold lg:text-lg text-sm lg:py-5 py-[18px] w-full">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[#FCFCFD] grid rounded-xl border border-[#F1F1F3] lg:px-[30px] md:px-6 px-5 lg:pt-[50px] md:pt-10 pt-[30px] lg:pb-[30px] md:pb-6 pb-5">
        <div className="bg-[#FFF9F0] rounded-md border border-[#FFEACC] text-center lg:py-3 md:py-[10px] py-2 text-[#262626] font-medium lg:text-[22px] md:text-lg text-base">
          Free Plan
        </div>
        <p className="font-semibold lg:text-[80px] md:text-6xl text-[50px] text-[#262626] text-center lg:mt-[50px] mt-[30px]">
          $99
          <span className="font-medium lg:text-xl md:text-base text-sm text-[#4C4C4D]">
            /month
          </span>
        </p>
        <div className="bg-[#FFFFFF] rounded-t-[14px] lg:mt-[50px] mt-[30px] border border-[#F1F1F3]">
          <p className="font-medium lg:text-xl text-lg text-[#262626] lg:mt-10 md:mt-[30px] mt-[20px] lg:mb-[30px] mb-5 text-center">
            Available Features
          </p>
          <div className="grid gap-5 lg:mx-[70px] md:mx-[60px] mx-5 mb-10">
            <div className="lg:p-[14px] p-3 flex items-center gap-3 rounded-lg border border-[#F1F1F3]">
              <Image
                className="lg:w-8 lg:h-8 w-6 h-6"
                width={32}
                height={32}
                src="/check.png"
                alt="check icon"
              />
              <p className="lg:text-lg text-sm text-[#4C4C4D]">
                Access to selected free courses.
              </p>
            </div>
            <div className="lg:p-[14px] p-3 flex items-center gap-3 rounded-lg border border-[#F1F1F3]">
              <Image
                className="lg:w-8 lg:h-8 w-6 h-6"
                width={32}
                height={32}
                src="/check.png"
                alt="check icon"
              />
              <p className="lg:text-lg text-sm text-[#4C4C4D]">
                Access to selected free courses.
              </p>
            </div>
            <div className="lg:p-[14px] p-3 flex items-center gap-3 rounded-lg border border-[#F1F1F3]">
              <Image
                className="lg:w-8 lg:h-8 w-6 h-6"
                width={32}
                height={32}
                src="/check.png"
                alt="check icon"
              />
              <p className="lg:text-lg text-sm text-[#4C4C4D]">
                Access to selected free courses.
              </p>
            </div>
            <div className="lg:p-[14px] p-3 flex items-center gap-3 rounded-lg border border-[#F1F1F3]">
              <Image
                className="lg:w-8 lg:h-8 w-6 h-6"
                width={32}
                height={32}
                src="/check.png"
                alt="check icon"
              />
              <p className="lg:text-lg text-sm text-[#4C4C4D]">
                Access to selected free courses.
              </p>
            </div>
            <div className="lg:p-[14px] p-3 flex items-center gap-3 rounded-lg border border-[#F1F1F3]">
              <Image
                className="lg:w-8 lg:h-8 w-6 h-6"
                width={32}
                height={32}
                src="/check.png"
                alt="check icon"
              />
              <p className="lg:text-lg text-sm text-[#4C4C4D]">
                Access to selected free courses.
              </p>
            </div>
          </div>
          <Link href="/courses">
            <button className="bg-[#FF9500] hover:bg-opacity-75 active:bg-[#E68A00] transition-all rounded-b-lg text-[#FFFFFF] font-semibold lg:text-lg text-sm lg:py-5 py-[18px] w-full">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
