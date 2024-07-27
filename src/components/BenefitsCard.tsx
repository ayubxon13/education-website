import Image from "next/image";

function BenefitsCard() {
  return (
    <div className="bg-[#FFFFFF] lg:p-[50px] p-[30px] rounded-[12px]">
      <p className="2xl:text-[80px] md:text-6xl text-[50px] font-bold text-[#262626] text-right">
        01
      </p>
      <p className="text-[#333333] font-semibold 2xl:mt-[50px] md:mt-10 mt-[30px] 2xl:text-2xl text-xl">
        Flexible Learning Schedule
      </p>
      <p className="text-[#4C4C4D] 2xl:text-lg text-base mt-[14px]">
        Fit your coursework around your existing commitments and obligations.
      </p>
      <div className="2xl:mt-[50px] md:mt-10 mt-[30px] grid justify-items-end">
        <Image
          className="2xl:w-[74px] 2xl:h-[74px] w-[54px] h-[54px]"
          width={74}
          height={74}
          src="/goPage.svg"
          alt="img next page"
        />
      </div>
    </div>
  );
}

export default BenefitsCard;
