import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import WhyAttendSection from "@/components/landing/WhyAttendSection";
import EventCitiesSection from "@/components/landing/EventCitiesSection";
import WhoShouldAttendSection from "@/components/landing/WhoShouldAttendSection";
import SpeakerSection from "@/components/landing/SpeakerSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import RegistrationSection from "@/components/landing/RegistrationSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <WhyAttendSection />
    <EventCitiesSection />
    <WhoShouldAttendSection />
    <SpeakerSection />
    <TestimonialsSection />
    <RegistrationSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
