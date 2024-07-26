import {ArrowRightIcon} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import Btn from "./Btn";
import ShowNavbar from "./ShowNavbar";
import {navLink} from "@/utils";

export default function Header() {
  return (
    <div>
      <div className="bg-[#FF9500] lg:mx-[30px] md:mx-[20px] mx-[16px] rounded-lg mt-5">
        <p className="text-[#FFFFFF] lg:gap-[23px] gap-3 flex items-center justify-center text-center py-[14px] lg:text-lg text-sm">
          Free Courses 🌟 Sale Ends Soon, Get It Now
          <ArrowRightIcon width={20} height={20} />
        </p>
      </div>
      <header className="max-container flex justify-between">
        <div className="flex items-center gap-[50px]">
          <Image
            src="/logodp.png"
            alt="Site logo"
            width={54}
            height={54}
            className="lg:w-[55px] lg:h-[55px] w-11 h-11"
          />
          <nav className="hidden lg:flex">
            {navLink.map((nav) => (
              <Link
                key={nav.name}
                className="xl:px-6 px-5 xl:py-[14px] py-3 xl:text-[18px] text-sm hover:bg-[#E4E4E7] rounded-lg transition-all"
                href={nav.link}
              >
                {nav.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex gap-[30px] items-center">
          <Link href="/sign-up" className="xl:text-lg text-sm hover:underline">
            Sign Up
          </Link>
          <Btn textColor="#FFFFFF" color="#FF9500" text="Login" />
          <ShowNavbar />
        </div>
      </header>
      <hr className="lg:mx-[30px] md:mx-[20px] mx-[16px]" />
    </div>
  );
}
