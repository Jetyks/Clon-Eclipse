import { AppShowcase } from "@/components/AppShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/Navbar";


export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <AppShowcase/>
      <FeaturesSection/>
    </main>
  );
}
