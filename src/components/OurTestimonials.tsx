"use client";
import TestimonialsCard from "./TestimonialsCard";
import ViewAll from "./ViewAll";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function OurTestimonials() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const itemVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0},
  };

  return (
    <section className="max-container pt-0 lg:mb-[100px] mb-[50px]">
      <ViewAll
        title="Our Testimonials"
        desc="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      />
      <div ref={ref} className="grid md:grid-cols-2 gap-[30px]">
        {Array.from({length: 4}).map((_, idx) => (
          <motion.div
            key={idx}
            className="flex"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{duration: 0.5, delay: idx * 0.2}}
          >
            <TestimonialsCard />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
