import BenefitsCard from "./BenefitsCard";
import Btn from "./Btn";

export default function Benefits() {
  return (
    <section className="max-container pt-0 lg:mb-[100px] mb-[50px]">
      <div className="2xl:flex block items-end justify-between mb-20">
        <div className="max-w-[1177px] w-full">
          <p className="font-semibold lg:text-[48px] md:text-[38px] text-[28px] text-[#262626]">
            Benefits
          </p>
          <p className="lg:text-[18px] 2xl:mb-0 mb-5 md:text-base text-sm text-[#262626]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <Btn fontW="500" color="#FCFCFD" text="View All" textColor="#59595A" />
      </div>
      <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <BenefitsCard />
        <BenefitsCard />
        <BenefitsCard />
        <BenefitsCard />
        <BenefitsCard />
        <BenefitsCard />
      </div>
    </section>
  );
}
