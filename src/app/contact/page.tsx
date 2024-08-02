import CoursesMainTitle from "@/components/CoursesMainTitle";
import {EnvelopeIcon} from "@heroicons/react/20/solid";

export default function Contact() {
  return (
    <>
      <CoursesMainTitle />
      <div className="max-container">
        <div className="bg-[#FFFFFF] flex gap-20 justify-between p-20">
          {/* <div className="grid gap-[30px] w-full">
            <div className="grid gap-[30px] grid-cols-2">
              <Input />
              <Input />
              <Input />
              <Input />
            </div>
            <Input />
            <Input />
          </div> */}
          <div className="grid gap-[50px]">
            <div className="bg-[#FCFCFD] border border-[#F1F1F3] w-[360px] rounded-lg h-min py-7">
              <div className="grid gap-5 justify-center justify-items-center">
                <div className="bg-[#F7F7F8] rounded-lg p-[14px] w-min border border-[#F1F1F3]">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <p className="text-[#4C4C4D] text-lg">
                  support@skillbridge.com
                </p>
              </div>
            </div>
            <div className="bg-[#FCFCFD] border border-[#F1F1F3] w-[360px] rounded-lg h-min py-7">
              <div className="grid gap-5 justify-center justify-items-center">
                <div className="bg-[#F7F7F8] rounded-lg p-[14px] w-min border border-[#F1F1F3]">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <p className="text-[#4C4C4D] text-lg">
                  support@skillbridge.com
                </p>
              </div>
            </div>
            <div className="bg-[#FCFCFD] border border-[#F1F1F3] w-[360px] rounded-lg h-min py-7">
              <div className="grid gap-5 justify-center justify-items-center">
                <div className="bg-[#F7F7F8] rounded-lg p-[14px] w-min border border-[#F1F1F3]">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <p className="text-[#4C4C4D] text-lg">
                  support@skillbridge.com
                </p>
              </div>
            </div>
            <div className="bg-[#FCFCFD] border border-[#F1F1F3] w-[360px] rounded-lg h-min py-7">
              <div className="grid gap-5 justify-center justify-items-center">
                <div className="bg-[#F7F7F8] rounded-lg p-[14px] w-min border border-[#F1F1F3]">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <p className="text-[#4C4C4D] text-lg">
                  support@skillbridge.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
