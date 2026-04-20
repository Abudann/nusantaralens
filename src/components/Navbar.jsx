import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 md:px-16 py-6 bg-transparent text-nl-cream absolute w-full z-50">
      <div className="text-2xl font-bold font-teachers tracking-wider">
        Nusantaralens
      </div>
      
      {/* Menu Desktop */}
      <div className="hidden md:flex gap-8 text-sm font-merriweather">
        <Link to="/" className="hover:text-nl-brown transition">Home</Link>
        <Link to="/explore" className="hover:text-nl-brown transition">Explore</Link>
        <Link to="/ai-assistant" className="hover:text-nl-brown transition">AI Assistant</Link>
        <Link to="/insights" className="hover:text-nl-brown transition">Insights</Link>
      </div>

      {/* Menu Mobile (Hamburger sederhana) */}
      <div className="md:hidden flex items-center">
        <button className="text-nl-cream focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;