type thisProps = {
  text: string;
  fontW?: "500" | "600" | "700" | "800";
};

export default function BtnPrimary({text, fontW}: thisProps) {
  return (
    <button
      style={{fontWeight: fontW}}
      className={`bg-[#FF9500] text-[#FFFFFF] lg:text-lg text-sm lg:px-6 px-5 py-[14px] rounded-lg`}
    >
      {text}
    </button>
  );
}
