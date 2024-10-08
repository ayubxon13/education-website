"use client";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {ArrowUpRightIcon} from "@heroicons/react/24/outline";
import StudentsTestimonials from "@/components/auth/StudentsTestimonials";
import BtnPrimary from "@/components/Btn/BtnPrimary";
import Input from "@/components/Input";
import Image from "next/image";

export default function Login() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  return (
    <motion.section
      ref={ref}
      initial={{opacity: 0, y: 50}}
      animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
      transition={{duration: 0.7}}
      className="max-container"
    >
      <div className="flex max-[1730px]:grid gap-y-10 max-[1730px]:justify-center lg:gap-x-[100px] gap-x-20 justify-between lg:mt-[100px] md:mt-20 lg:mb-[150px] md:mb-[100px] mt-[50px] mb-[50px] items-center">
        <div className="max-[1730px]:order-2">
          <StudentsTestimonials />
        </div>
        <div className="bg-[#FFFFFF] max-[1730px]:order-1 lg:p-[50px] md:p-[40px] p-[30px] rounded-xl">
          <p className="text-[#262626] font-semibold text-center lg:text-5xl text-[38px]">
            Login
          </p>
          <p className="text-[#4C4C4D] lg:text-lg text-base lg:mt-3 mt-2 lg:mb-[50px] md:mb-10 mb-[30px] text-center">
            Welcome back! Please log in to access your account.
          </p>
          <div className="grid lg:gap-6 gap-5">
            <Input name="email" placeHolder="Enter your Email" title="Email" />

            <Input
              name="password"
              placeHolder="Enter your Password"
              title="Password"
            />
            <BtnPrimary text="Login" fontW="500" />
            <div className="flex gap-3 text-[#98989A] items-center">
              <hr className="w-full" />
              <p className="lg:text-lg text-sm">OR</p>
              <hr className="w-full" />
            </div>
            <button className="bg-[#F7F7F8] hover:bg-opacity-65 active:bg-[#E0E0E0] transition-all flex items-center justify-center gap-[14px] border border-[#F1F1F3] w-full rounded-[10px] text-[#262626] lg:py-[18px] py-4 font-medium lg:text-lg text-sm">
              <Image
                src="/google.svg"
                width={30}
                height={30}
                alt="google icon"
              />
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
      </div>
    </motion.section>
  );
}
