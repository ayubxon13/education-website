import Image from "next/image";
import {ArrowUpRightIcon} from "@heroicons/react/24/outline";
import Input from "../Input";
import BtnPrimary from "../Btn/BtnPrimary";

export default function RegistrationCard() {
  return (
    <div className="bg-[#FFFFFF] lg:p-[50px] md:p-[40px] p-[30px] rounded-xl">
      <p className="text-[#262626] font-semibold text-center lg:text-5xl text-[38px]">
        Login
      </p>
      <p className="text-[#4C4C4D] lg:text-lg text-base lg:mt-3 mt-2 lg:mb-[50px] md:mb-10 mb-[30px] text-center">
        Welcome back! Please log in to access your account.
      </p>
      <div className="grid lg:gap-6 gap-5">
        <div className="grid lg:gap-y-[14px] gap-y-[10px]">
          <p className="text-[#262626] font-medium lg:text-lg md:text-base text-sm">
            Email
          </p>
          <input
            placeholder="Enter your Email"
            className="bg-[#FCFCFD] w-full lg:text-lg md:text-base text-sm rounded-[10px] lg:p-6 p-5 border border-[#F1F1F3]"
            type="text"
          />
        </div>

        <Input />

        <Input />
        <BtnPrimary text="Login" fontW="500" />
        <div className="flex gap-3 text-[#98989A] items-center">
          <hr className="w-full" />
          <p className="lg:text-lg text-sm">OR</p>
          <hr className="w-full" />
        </div>
        <button className="bg-[#F7F7F8] flex items-center justify-center gap-[14px] border border-[#F1F1F3] w-full rounded-[10px] text-[#262626] lg:py-[18px] py-4 font-medium lg:text-lg text-sm">
          <Image src="/google.svg" width={30} height={30} alt="google icon" />
          Login with Google
        </button>
        <p className="lg:text-lg text-sm text-[#262626] gap-1 justify-center flex">
          Don’t have an account?
          <span className="font-medium underline flex items-center gap-[6px]">
            Sign Up <ArrowUpRightIcon className="w-5 h-5" />
          </span>
        </p>
      </div>
    </div>
  );
}
