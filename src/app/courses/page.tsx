import CoursesAbout from "@/components/CoursesAbout";
import CoursesMainTitle from "@/components/CoursesMainTitle";

export default function Courses() {
  return (
    <>
      <CoursesMainTitle />
      <div className="lg:mb-[150px] md:mb-[100px] mb-[50px]">
        <CoursesAbout />
        <CoursesAbout />
        <CoursesAbout />
        <CoursesAbout />
      </div>
    </>
  );
}
