import BtnPrimary from "./Btn/BtnPrimary";

type thisProps = {
  title: string;
  desc: string;
};

export default function ViewAll({desc, title}: thisProps) {
  return (
    <div className="2xl:flex block items-end justify-between mb-20">
      <div className="max-w-[1177px] w-full">
        <p className="font-semibold lg:text-[48px] md:text-[38px] text-[28px] text-[#262626]">
          {title}
        </p>
        <p className="lg:text-[18px] mt-[6px] 2xl:mb-0 mb-5 md:text-base text-sm text-[#59595A]">
          {desc}
        </p>
      </div>
      <BtnPrimary text="Monthly" fontW="500" />
    </div>
  );
}
