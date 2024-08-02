export default function Input() {
  return (
    <div className="grid lg:gap-y-[14px] gap-y-[10px]">
      <p className="text-[#262626] font-medium lg:text-lg md:text-base text-sm">
        Email
      </p>
      <input
        placeholder="Enter your Email"
        className="bg-[#FCFCFD] w-full lg:text-lg md:text-base text-sm rounded-[10px] lg:p-6 p-5 border border-[#F1F1F3]"
        type="text"
      />
    </div>
  );
}
