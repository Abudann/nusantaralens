import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 1.9) {
        setIsLightMode(true);
      } else {
        setIsLightMode(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-4 transition-all duration-500 ${
        isLightMode 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 text-gray-800 shadow-sm' // TEMA TERANG
          : 'bg-black/20 backdrop-blur-md border-b border-white/10 text-white' // TEMA GELAP
      }`}
    >
      {/* LOGO */}
      <div className="text-xl md:text-2xl font-bold font-teachers">
        <Link to="/">Nusantaralens</Link>
      </div>

      {/* MENU LINKS */}
      <ul className="hidden md:flex gap-8 font-teachers text-sm md:text-base">
        <li className="cursor-pointer hover:text-nl-green transition">Home</li>
        <li className="cursor-pointer hover:text-nl-green transition">Explore</li>
        <li className="cursor-pointer hover:text-nl-green transition">AI Assistant</li>
        <li className="cursor-pointer hover:text-nl-green transition">Insights</li>
      </ul>
    </nav>
  );
};

export default Navbar;