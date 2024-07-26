export default function Btn({
  text,
  color,
  textColor,
}: {
  text: string;
  color: string;
  textColor: string;
}) {
  return (
    <button
      className={`bg-[${color}] text-[${textColor}] xl:text-lg text-sm xl:px-[34px] px-6 xl:py-[14px] py-3 rounded-lg`}
    >
      {text}
    </button>
  );
}
