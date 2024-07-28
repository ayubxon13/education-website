import TestimonialsCard from "./TestimonialsCard";
import ViewAll from "./ViewAll";

export default function OurTestimonials() {
  return (
    <section className="max-container pt-0 lg:mb-[100px] mb-[50px]">
      <ViewAll
        title="Our Testimonials"
        desc="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      />
      <div className="grid grid-cols-2 gap-[30px]">
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </section>
  );
}
