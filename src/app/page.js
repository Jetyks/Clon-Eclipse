import { AppShowcase } from "@/components/AppShowcase";
import { CtaSection } from "@/components/CtaSection";
import { FAQSection } from "@/components/FAQSection";
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
      <FAQSection 
      title ="Everything you need to know"
      subtitle ="Here are the most questions people always ask about."
      ></FAQSection>
    </main>
  );
}
