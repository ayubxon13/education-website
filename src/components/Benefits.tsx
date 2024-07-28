import {benefitsCardData} from "@/utils";
import BenefitsCard from "./BenefitsCard";
import ViewAll from "./ViewAll";

export default function Benefits() {
  return (
    <section className="max-container pt-0 lg:mb-[100px] mb-[50px]">
      <ViewAll
        title="Benefits"
        desc="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      />
      <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {benefitsCardData.map((item, idx) => (
          <BenefitsCard
            key={item.title}
            desc={item.description}
            idx={idx + 1}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}
