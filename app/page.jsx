import FAQSection from "@/components/Home_page/Faq";
import FeatureSection from "@/components/Home_page/Feature";
import Hero from "@/components/Home_page/Hero";
import HowItWorks from "@/components/Home_page/HowItWork";
import IndustriesSection from "@/components/Home_page/Industri";
import Review from "@/components/Home_page/Review";
import Testimonial from "@/components/Home_page/Testimonial";


export default function Home() {
  return (
    <>
      <Hero />   
      <Review />   
      <HowItWorks />
      <Testimonial />
      <IndustriesSection />
      <FeatureSection />
      <FAQSection />
    </>
  );
}
