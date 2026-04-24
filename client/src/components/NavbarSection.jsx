import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Deteksi apakah user sedang di halaman Home ("/")
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 1.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  // LOGIKA PINTAR:
  // Jika BUKAN di Home, langsung mode terang.
  // Jika di Home, tunggu sampai di-scroll baru terang.
  const isLightMode = !isHomePage || isScrolled;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-4 transition-all duration-500 ${
        isLightMode 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 text-gray-800 shadow-sm' 
          : 'bg-black/20 backdrop-blur-md border-b border-white/10 text-white'
      }`}
    >
      <div className="text-xl md:text-2xl font-bold">
        <Link to="/">Nusantaralens</Link>
      </div>
      
      <ul className="hidden md:flex gap-8 font-teachers text-sm md:text-base">
        <li className="cursor-pointer hover:text-[#008781] transition"><Link to="/">Home</Link></li>
        <li className="cursor-pointer hover:text-[#008781] transition">Explore</li>
        <li className="cursor-pointer hover:text-[#008781] transition"><Link to="/ai-assistant">AI Assistant</Link></li>
        <li className="cursor-pointer hover:text-[#008781] transition">Insights</li>
      </ul>
    </nav>
  );
};

export default NavbarSection;