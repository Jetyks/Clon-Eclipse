import { AppShowcase } from "@/components/AppShowcase";
import { CtaSection } from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/Navbar";
import { PricingPlans } from "@/components/PricingPlans";


export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <AppShowcase/>
      <FeaturesSection/>
      <CtaSection/>
      <PricingPlans/>
    </main>
  );
}
