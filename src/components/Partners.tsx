"use client";
import {partnersData} from "@/utils";
import Image from "next/image";
import {Fragment} from "react";

export default function Partners() {
  return (
    <div className="mx-[30px] lg:my-[100px] md:my-20 my-[30px]">
      <div className="bg-white max-container rounded-xl w-full">
        <div className="gap-8 flex overflow-x-auto lg:p-[30px] sm:p-6 p-[10px] space-x-4 justify-between">
          {partnersData.map((single) => (
            <Fragment key={single.image}>
              <Image
                className="hover:opacity-60 duration-200"
                width={100}
                height={70}
                src={single.image}
                alt="Partners photo"
              />
              <p className="border-l divide-solid border-[#f1f1f3]"></p>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
