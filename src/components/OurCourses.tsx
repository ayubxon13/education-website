import OurCoursesCard from "./OurCoursesCard";
import ViewAll from "./ViewAll";

export default function OurCourses() {
  return (
    <section className="max-container pt-0 lg:mb-[100px] mb-[50px]">
      <ViewAll
        title="Our Courses"
        desc="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      />
      <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-[30px]">
        <OurCoursesCard />
        <OurCoursesCard />
        <OurCoursesCard />
        <OurCoursesCard />
      </div>
    </section>
  );
}
