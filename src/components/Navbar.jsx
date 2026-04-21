import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // NAVBAR UTAMA: Menggunakan efek blur kaca (backdrop-blur-md)
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/20 backdrop-blur-md border-b border-white/10 text-white transition-all duration-300">
      <div className="text-2xl font-bold font-teachers tracking-wider">
        Nusantaralens
      </div>
      
      {/* MENU DESKTOP */}
      <div className="hidden md:flex gap-8 text-base font-teachers font-normal">
        <Link to="/" className="hover:text-nl-brown transition">Home</Link>
        <Link to="/explore" className="hover:text-nl-brown transition">Explore</Link>
        <Link to="/ai-assistant" className="hover:text-nl-brown transition">AI Assistant</Link>
        <Link to="/insights" className="hover:text-nl-brown transition">Insights</Link>
      </div>

      {/* MENU MOBILE (Hamburger Icon) */}
      <div className="md:hidden flex items-center">
        <button className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

    </nav>
  );
};

export default Navbar;