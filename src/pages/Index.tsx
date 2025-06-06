import HeroSection from "@/components/HeroSection";
import DonationProgress from "@/components/DonationProgress";
import DonationCards from "@/components/DonationCards";
import DonationForm from "@/components/DonationForm";
import ProjectInfo from "@/components/ProjectInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <DonationProgress />
      <DonationCards />
      <DonationForm />
      <ProjectInfo />
    </div>
  );
};

export default Index;
