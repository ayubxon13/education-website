import {EnvelopeIcon} from "@heroicons/react/16/solid";
import {MapPinIcon, PhoneIcon} from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF]">
      <div className="max-container lg:pb-[30px] pb-5 lg:pt-[100px] md:pt-[60px] pt-[50px]">
        <div className="xl:flex grid gap-y-10 justify-between">
          <div>
            <Image
              src="/logodp.png"
              alt="Site logo"
              width={54}
              height={54}
              className="lg:w-[55px] lg:h-[55px] w-11 h-11"
            />
            <div className="grid lg:gap-5 md:gap-[14px] gap-3 lg:mt-10 mt-[30px] text-[#262626] ;lg:text-lg md:text-base text-[15px]">
              <a
                className="flex items-center gap-1"
                href="mailto: yuldoshevv7@gmail.com"
              >
                <EnvelopeIcon width={24} height={24} /> yuldoshevv7@gmail.com
              </a>
              <a className="flex items-center gap-1" href="tel:123-456-7890">
                <PhoneIcon width={24} height={24} />
                +1-123-456-7890
              </a>
              <p className="flex items-center gap-1">
                <MapPinIcon width={24} height={24} /> Somewhere in the World
              </p>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 grid-cols-2 lg:gap-[30px] gap-6">
            <div>
              <p className="text-[#262626] lg:text-xl text-lg font-semibold">
                Home
              </p>
              <div className="grid md:gap-2 gap-1 lg:mt-[14px] mt-[10px] text-[#59595A] lg:text-lg md:text-base text-sm">
                <p>Benefits</p>
                <p>Our Courses</p>
                <p>Our Testimonials</p>
                <p>Our FAQ</p>
              </div>
            </div>
            <div>
              <p className="text-[#262626] lg:text-xl text-lg font-semibold">
                About Us
              </p>
              <div className="grid md:gap-2 gap-1 lg:mt-[14px] mt-[10px] text-[#59595A] lg:text-lg md:text-base text-sm">
                <p>Company</p>
                <p>Achievements</p>
                <p>Our Goals</p>
              </div>
            </div>
            <div>
              <p className="text-[#262626] lg:text-xl text-lg font-semibold">
                Social Profiles
              </p>
              <div className="flex gap-[14px] lg:mt-[14px] mt-[10px] text-[#59595A] text-lg">
                <div className="lg:p-[14px] p-3 bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg">
                  <Image
                    className="lg:w-6 lg:h-6 w-5 h-5"
                    width={24}
                    height={24}
                    src="/facebook.svg"
                    alt="facebook img"
                  />
                </div>
                <div className="lg:p-[14px] p-3 bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg">
                  <Image
                    className="lg:w-6 lg:h-6 w-5 h-5"
                    width={24}
                    height={24}
                    src="/facebook.svg"
                    alt="facebook img"
                  />
                </div>
                <div className="lg:p-[14px] p-3 bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg">
                  <Image
                    className="lg:w-6 lg:h-6 w-5 h-5"
                    width={24}
                    height={24}
                    src="/facebook.svg"
                    alt="facebook img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="md:my-[50px] my-5" />
        <p className="text-center text-[#656567] md:text-lg text-sm">
          © 2023 Skillbridge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
