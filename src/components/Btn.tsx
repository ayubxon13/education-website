export default function Btn({text}: {text: string}) {
  return (
    <button className="bg-[#FF9500] text-white xl:text-lg text-sm xl:px-[34px] px-6 xl:py-[14px] py-3 rounded-lg">
      {text}
    </button>
  );
}
  