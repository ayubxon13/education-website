import RegistrationCard from "@/components/auth/RegistrationCard";
import StudentsTestimonials from "@/components/auth/StudentsTestimonials";

export default function Sign() {
  return (
    <section className="max-container">
      <div className="flex max-[1730px]:grid gap-y-10 max-[1730px]:justify-center lg:gap-x-[100px] gap-x-20 justify-between lg:mt-[100px] md:mt-20 lg:mb-[150px] md:mb-[100px] mt-[50px] mb-[50px] items-center">
        <div className="max-[1730px]:order-2">
          <StudentsTestimonials />
        </div>
        <div className="max-[1730px]:order-1">
          <RegistrationCard />
        </div>
      </div>
    </section>
  );
}
