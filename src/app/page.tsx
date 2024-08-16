import Benefits from "@/components/Benefits";
import CourseMainVideo from "@/components/CourseMainVideo";
import HomeMainTitle from "@/components/HomeMainTitle";
import OurCourses from "@/components/OurCourses";
import OurPricing from "@/components/OurPricing";
import OurTestimonials from "@/components/OurTestimonials";
import Partners from "@/components/Partners";
import Questions from "@/components/Questions";

export default function Home() {
  return (
    <main className="lg:mt-[100px] mt-20">
      <HomeMainTitle />
      <Partners />
      <CourseMainVideo />
      <Benefits />
      <OurCourses />
      <OurTestimonials />
      <OurPricing />
      <Questions />
    </main>
  );
}
