import BtnPrimary from "@/components/Btn/BtnPrimary";
import BtnSecondary from "@/components/Btn/BtnSecondary";
import CoursePriceCard from "@/components/CoursePriceCard";
import CoursesMainTitle from "@/components/CoursesMainTitle";
import Questions from "@/components/Questions";

export default function Pricing() {
  return (
    <>
      <CoursesMainTitle />
      <div className="max-container">
        <div className="p-3 bg-[#FFFFFF] mx-auto md:mb-[50px] mb-10 w-min flex rounded-lg">
          <BtnPrimary text="Monthly" fontW="500" />
          <BtnSecondary text="Yearly" fontW="500" />
        </div>
        <CoursePriceCard />
      </div>
      <div className="lg:mt-[150px] md:mt-[100px] mt-[50px]">
        <Questions />
      </div>
    </>
  );
}
