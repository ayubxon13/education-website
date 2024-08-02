type thisProps = {
  text: string;
  fontW?: "500" | "600" | "700" | "800";
};

export default function BtnPrimary({text, fontW}: thisProps) {
  return (
    <button
      style={{fontWeight: fontW}}
      className={`bg-[#FF9500] hover:bg-opacity-75 active:bg-[#E68A00] transition-all text-[#FFFFFF] lg:text-lg text-sm lg:px-6 px-5 py-[14px] rounded-lg`}
    >
      {text}
    </button>
  );
}
