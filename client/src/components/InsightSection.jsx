import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import MapIndonesia from '../components/MapIndonesia';

const InsightSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen bg-bianca-50 py-32 flex flex-col items-center overflow-hidden">
      
      {/* --- KONTEN TEKS --- */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 data-aos="fade-down" className="text-4xl md:text-5xl lg:text-[54px] font-bold font-base text-inv-accent mb-2 drop-shadow-sm">
          Wawasan Nusantara
        </h2>
        <h2 data-aos="fade-down" data-aos-delay="100" className="text-4xl md:text-5xl lg:text-[54px] font-bold font-base text-roman-coffee-800 mb-6 drop-shadow-sm">
          Demografi & Wilayah
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="text-sm md:text-base lg:text-lg font-teachers text-gray-600 mb-10 max-w-3xl leading-relaxed">
          Visualisasi pemetaan Nusantara yang memuat rincian informasi demografi dan identitas daerah. Portal ini berfungsi sebagai rujukan visual untuk memahami profil setiap provinsi di Indonesia secara kolektif.
        </p>

        <button 
          data-aos="zoom-in" data-aos-delay="300"
          onClick={() => navigate('/insights')}
          className="flex items-center justify-between bg-white text-inv-base w-[170px] md:w-[190px] h-[45px] md:h-[55px] rounded-full pl-5 pr-1.5 md:pl-6 md:pr-2 font-bold font-teachers hover:bg-gray-50 transition shadow-lg border border-gray-200 group mb-16 relative z-30"
        >
          <span className="text-xs md:text-sm">Mulai Menjelajah</span>
          <span className="bg-inv-base text-white p-2 md:p-2.5 rounded-full group-hover:bg-roman-coffee-800 transition">
            <FaArrowRight size={12} className="md:text-sm" />
          </span>
        </button>
      </div>

      {/* --- AREA PETA INTERAKTIF --- */}
      <div className="relative w-full max-w-5xl mx-auto mt-4 px-4 flex justify-center items-center">
        
        {/* CHART BAR (Mentul-mentul) */}
        <div data-aos="fade-left" data-aos-delay="500" className="absolute -top-8 md:top-10 right-2 md:right-10 z-20">
          <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl animate-bounce border border-gray-100" style={{ animationDuration: '3s' }}>
            <div className="w-14 h-10 md:w-20 md:h-14 flex items-end justify-between gap-1">
              <div className="w-2 md:w-3 h-6 md:h-8 bg-blue-400 rounded-t-sm"></div>
              <div className="w-2 md:w-3 h-8 md:h-12 bg-inv-base rounded-t-sm"></div>
              <div className="w-2 md:w-3 h-5 md:h-6 bg-yellow-400 rounded-t-sm"></div>
              <div className="w-2 md:w-3 h-7 md:h-10 bg-purple-400 rounded-t-sm"></div>
            </div>
          </div>
        </div>

        {/* CHART PIE (Mentul-mentul) */}
        <div data-aos="fade-right" data-aos-delay="500" className="absolute -bottom-12 md:bottom-10 left-2 md:left-10 z-20">
          <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl animate-bounce border border-gray-100" style={{ animationDuration: '4s' }}>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[6px] md:border-8 border-t-red-500 border-r-blue-500 border-b-inv-base border-l-yellow-500"></div>
          </div>
        </div>

        {/* Manggil Peta SVG-nya */}
        <div data-aos="zoom-in" data-aos-delay="400" className="w-full drop-shadow-2xl flex justify-center z-10 opacity-95">
          <MapIndonesia />
        </div>

      </div>
    </section>
  );
};

export default InsightSection;