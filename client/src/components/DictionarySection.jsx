import { FaMagnifyingGlass } from 'react-icons/fa6';
import imgJawa from '../assets/heroes/soedirman.png';
import imgSunda from '../assets/heroes/bung-tomo.png';
import imgMinang from '../assets/heroes/kh-dewantara.png';
import burungOrnament from '../assets/heroes/burung.png';
import penariKiri from '../assets/heroes/penari-kiri.png';
import penariKanan from '../assets/heroes/penari-kanan.png';
import wayangKiri from '../assets/hero/wayang-kiri.png';
import wayangKanan from '../assets/hero/wayang-kanan.png';

const DictionarySection = () => {

  const dictionaries = [
    { id: 1, region: "Jawa", language: "Bahasa Jawa", image: imgJawa },
    { id: 2, region: "Sunda", language: "Bahasa Sunda", image: imgSunda },
    { id: 3, region: "Minangkabau", language: "Bahasa Minang", image: imgMinang },
    { id: 4, region: "Batak", language: "Bahasa Batak", image: imgJawa },
    { id: 5, region: "Bali", language: "Bahasa Bali", image: imgSunda },
    { id: 6, region: "Bugis", language: "Bahasa Bugis", image: imgMinang },
  ];

  return (
    <section className="relative w-full bg-bianca-50 font-teachers flex flex-col items-center pt-32 z-10 overflow-hidden">
      
      {/* --- ORNAMEN TEPI (WAYANG KIRI & KANAN) --- */}
      <img src={wayangKiri} alt="Wayang Kiri" className="absolute left-0 top-[40%] -translate-y-1/2 w-10 md:w-16 lg:w-20 opacity-90 pointer-events-none" data-aos="fade-right" />
      <img src={wayangKanan} alt="Wayang Kanan" className="absolute right-0 top-[40%] -translate-y-1/2 w-10 md:w-16 lg:w-20 opacity-90 pointer-events-none" data-aos="fade-left" />

      {/* --- HEADER SECTION --- */}
      <div className="relative w-full max-w-5xl mx-auto px-6 pb-12 flex flex-col items-center text-center">
        
        {/* Ornamen Burung */}
        <div data-aos="fade-left" className="absolute right-0 md:-right-10 top-5 md:top-10 w-24 md:w-36 pointer-events-none opacity-90 drop-shadow-sm">
           <img src={burungOrnament} alt="Ornamen Burung" className="w-full h-auto" />
        </div>

        <h1 data-aos="fade-down" className="text-4xl md:text-5xl lg:text-6xl font-bold font-base text-inv-accent mb-4 drop-shadow-sm leading-tight">
          Kamus Bahasa <br /> Daerah Indonesia
        </h1>
        
        <p data-aos="fade-up" data-aos-delay="200" className="text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed mb-10">
          Halaman ini memuat dokumentasi bahasa daerah yang tersebar di berbagai wilayah Indonesia. Informasi disajikan sebagai referensi untuk mengenal ragam kosakata dan identitas tutur yang menjadi bagian dari kekayaan budaya tiap daerah.
        </p>

        {/* Search Bar */}
        <div data-aos="zoom-in" data-aos-delay="400" className="w-full max-w-2xl bg-white rounded-full shadow-md flex items-center px-6 py-4 border border-gray-100 relative z-20">
          <FaMagnifyingGlass className="text-gray-400 text-lg mr-4" />
          <input 
            type="text" 
            placeholder="Cari kamus daerah" 
            className="flex-grow bg-transparent outline-none font-teachers text-gray-700 text-sm md:text-base placeholder-gray-400"
          />
        </div>
      </div>

      {/* --- GRID KAMUS BAHASA --- */}
      <div className="w-full max-w-5xl mx-auto px-6 pb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {dictionaries.map((dict, index) => (
            <div 
              key={dict.id} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[3/4] bg-gray-200"
            >
              <img src={dict.image} alt={dict.language} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
              {/* Blok Gelap di bawah */}
              <div className="absolute bottom-0 left-0 w-full h-[35%] bg-black/60 backdrop-blur-[2px] transition-all duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                <h3 className="text-white font-bold text-lg md:text-xl font-base drop-shadow-md">{dict.region}</h3>
                <p className="text-gray-200 text-xs md:text-sm mt-1">{dict.language}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PAGINATION --- */}
      <div data-aos="fade-up" className="w-full flex justify-center items-center gap-2 md:gap-3 mb-24 relative z-10">
        <button className="px-3 py-2 md:px-5 md:py-2.5 rounded-lg bg-[#b5a38f]/40 hover:bg-[#b5a38f]/70 text-inv-base font-semibold text-xs md:text-sm transition flex items-center">
          &lt; Kembali
        </button>
        <button className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-inv-base text-white shadow-md font-bold text-sm md:text-base transition">1</button>
        <button className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-[#b5a38f]/40 hover:bg-[#b5a38f]/70 text-inv-base font-bold text-sm md:text-base transition">2</button>
        <button className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-[#b5a38f]/40 hover:bg-[#b5a38f]/70 text-inv-base font-bold text-sm md:text-base transition">3</button>
        <button className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-[#b5a38f]/40 hover:bg-[#b5a38f]/70 text-inv-base font-bold text-sm md:text-base transition">4</button>
        <button className="px-3 py-2 md:px-5 md:py-2.5 rounded-lg bg-[#b5a38f]/40 hover:bg-[#b5a38f]/70 text-inv-base font-semibold text-xs md:text-sm transition flex items-center">
          Lanjut &gt;
        </button>
      </div>

      {/* --- QUOTE & ORNAMEN PENARI BAWAH --- */}
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6 pb-24 md:pb-32 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
        
        {/* Penari Kiri */}
        <div data-aos="fade-right" data-aos-duration="1500" className="w-32 md:w-48 lg:w-56 pointer-events-none drop-shadow-sm flex-shrink-0">
          <img src={penariKiri} alt="Ornamen Penari Kiri" className="w-full h-auto" />
        </div>

        {/* Kutipan Buya Hamka */}
        <div data-aos="zoom-in" className="text-center max-w-xl flex-grow px-4">
          <h2 className="text-xl md:text-2xl font-base text-inv-accent font-semibold leading-relaxed mb-4 md:mb-6">
            "Membaca buku-buku yang baik berarti memberi makanan rohani yang baik."
          </h2>
          <p className="text-gray-700 font-teachers text-sm md:text-base tracking-wide">Buya Hamka</p>
        </div>

        {/* Penari Kanan */}
        <div data-aos="fade-left" data-aos-duration="1500" className="w-32 md:w-48 lg:w-56 pointer-events-none drop-shadow-sm flex-shrink-0">
          <img src={penariKanan} alt="Ornamen Penari Kanan" className="w-full h-auto" />
        </div>

      </div>

    </section>
  );
};

export default DictionarySection;