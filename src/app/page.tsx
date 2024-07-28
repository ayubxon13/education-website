import Benefits from "@/components/Benefits";
import OurCourses from "@/components/OurCourses";
import OurTestimonials from "@/components/OurTestimonials";
import Partners from "@/components/Partners";
import SiteMainTitle from "@/components/SiteMainTitle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="lg:mt-[100px] mt-20">
      <SiteMainTitle />
      <Partners />
      <Image
        className="max-container lg:mb-[150px] mb-[50px]"
        src="videoHome.svg"
        width={1596}
        height={790}
        alt="Video img"
      />
      <Benefits />
      <OurCourses />
      <OurTestimonials />
    </main>
  );
}
