import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import PromiseSection from "@/components/landing/PromiseSection";
import OutcomesSection from "@/components/landing/OutcomesSection";
import AgendaSection from "@/components/landing/AgendaSection";
import SpeakerSection from "@/components/landing/SpeakerSection";
import EventDetailsSection from "@/components/landing/EventDetailsSection";
import QualificationSection from "@/components/landing/QualificationSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import RegistrationSection from "@/components/landing/RegistrationSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <main>
      <HeroSection />
      <TrustBar />
      <PromiseSection />
      <OutcomesSection />
      <AgendaSection />
      <SpeakerSection />
      <EventDetailsSection />
      <QualificationSection />
      <TestimonialsSection />
      <FAQSection />
      <RegistrationSection />
    </main>
    <Footer />
  </div>
);

export default Index;
