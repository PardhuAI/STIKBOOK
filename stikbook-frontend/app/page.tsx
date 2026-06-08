import AISection from "@/components/sections/Home/AiSection";
import EmpowerBusinesses from "@/components/sections/Home/EmpowerBusinesses";
import FAQ from "@/components/sections/Home/Faqs";
import FeaturesSection from "@/components/sections/Home/Features";
import Hero from "@/components/sections/Home/Hero";
import Testimonials from "@/components/sections/Home/Testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <EmpowerBusinesses />
      <AISection />
      <Testimonials />
      <FAQ />
    </>
  );
}
