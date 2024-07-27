export default function Btn({
  text,
  color,
  textColor,
  fontW = "400",
}: {
  text: string;
  color: string;
  textColor: string;
  fontW?: "400" | "500" | "600" | "700" | "800";
}) {
  const fontWeightClasses = {
    "400": "font-normal",
    "500": "font-medium",
    "600": "font-semibold",
    "700": "font-bold",
    "800": "font-extrabold",
  };

  return (
    <button
      className={`bg-[${color}] text-[${textColor}] xl:text-lg text-sm xl:px-[34px] lg:px-6 px-5 xl:py-[14px] py-3 rounded-lg ${fontWeightClasses[fontW]}`}
    >
      {text}
    </button>
  );
}
