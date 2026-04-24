import NavbarSection from '../components/NavbarSection';
import HeroSection from '../components/HeroSection';
import AiAssistantSection from '../components/AiAssistantSection';
import InsightSection from '../components/InsightSection';
import FooterSection from '../components/FooterSection';

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <NavbarSection />
      <HeroSection />
      <AiAssistantSection />
      <InsightSection />
      <FooterSection />
    </div>
  );
};

export default Home;