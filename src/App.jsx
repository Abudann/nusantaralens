import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PreviewSection from './components/PreviewSection';

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Navbar />
        <Hero />
        <PreviewSection /> 
      </div>
    </BrowserRouter>
  );
}

export default App;