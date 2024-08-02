type thisProps = {
  text: string;
  fontW?: "500" | "600" | "700" | "800";
};

export default function BtnSecondary({text, fontW}: thisProps) {
  return (
    <button
      style={{fontWeight: fontW}}
      className={`bg-[#FFFFFF] hover:bg-opacity-65 active:bg-[#E0E0E0] transition-all text-[#262626] lg:text-lg text-sm border border-[#F1F1F3] lg:px-6 px-5 py-[14px] rounded-lg`}
    >
      {text}
    </button>
  );
}
