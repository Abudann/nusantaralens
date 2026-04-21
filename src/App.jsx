import { BrowserRouter } from 'react-router-dom';

import NavbarSection from './components/NavbarSection';
import HeroSection from './components/HeroSection';
import PreviewSection from './components/PreviewSection';
import AIAssistantSection from './components/AiAssistantSection';

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <NavbarSection />
        <HeroSection />
        <PreviewSection /> 
        <AIAssistantSection />
      </div>
    </BrowserRouter>
  );
}

export default App;