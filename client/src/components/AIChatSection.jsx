import { FaPaperclip, FaPaperPlane, FaUser, FaMusic, FaCommentDots } from 'react-icons/fa6';
import bgBatik from '../assets/ai/bg-batik.png';

const AIChatSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-bianca-50 flex flex-col items-center pt-32 pb-10 px-6 overflow-hidden">
      
      {/* --- BACKGROUND BATIK (DIBELAH DUA) --- */}
      {/* Setengah Kiri */}
      <div className="absolute top-0 left-0 w-1/2 h-full z-0 overflow-hidden pointer-events-none">
        <img 
          src={bgBatik} 
          alt="Batik Pattern" 
          className="w-full h-full object-cover object-right opacity-100" 
        />
      </div>

      {/* Setengah Kanan */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 overflow-hidden pointer-events-none">
        <img 
          src={bgBatik} 
          alt="Batik Pattern" 
          className="w-full h-full object-cover object-left opacity-100 transform scale-x-[-1]" 
        />
      </div>


      {/* --- CONTAINER KONTEN UTAMA --- */}
      <div className="relative z-20 flex-1 w-full max-w-4xl flex flex-col items-center justify-center mt-8">
        
        {/* HEADER TEXT */}
        <div className="text-center mb-12 md:mb-16">
          <h1 data-aos="fade-down" className="text-4xl md:text-[54px] font-bold font-base text-inv-accent mb-4 md:mb-6 drop-shadow-sm leading-tight">
            Hallo, Saya Nusabot
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-xl md:text-3xl font-teachers text-roman-coffee-800">
            Apa yang ingin anda ketahui?
          </p>
        </div>

        {/* SUGGESTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          
          {/* Card 1 */}
          <div data-aos="fade-up" data-aos-delay="300" className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-[24px] shadow-sm flex flex-col gap-4 cursor-pointer hover:shadow-md hover:-translate-y-1 transition duration-300 border border-gray-100/50">
            <FaUser className="text-inv-base text-2xl" />
            <p className="font-teachers text-sm lg:text-base leading-relaxed text-gray-700">
              Ceritakan kepada saya mengenai pahlawan nasional Ir. Soekarno!
            </p>
          </div>

          {/* Card 2 */}
          <div data-aos="fade-up" data-aos-delay="400" className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-[24px] shadow-sm flex flex-col gap-4 cursor-pointer hover:shadow-md hover:-translate-y-1 transition duration-300 border border-gray-100/50">
            <FaMusic className="text-inv-base text-2xl" />
            <p className="font-teachers text-sm lg:text-base leading-relaxed text-gray-700">
              Dari mana asalnya alat musik Sasando?
            </p>
          </div>

          {/* Card 3 */}
          <div data-aos="fade-up" data-aos-delay="500" className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-[24px] shadow-sm flex flex-col gap-4 cursor-pointer hover:shadow-md hover:-translate-y-1 transition duration-300 border border-gray-100/50">
            <FaCommentDots className="text-inv-base text-2xl" />
            <p className="font-teachers text-sm lg:text-base leading-relaxed text-gray-700">
              Beritahu saya 5 bahasa Jawa dalam percakapan sehari-hari!
            </p>
          </div>

        </div>

      </div>

      {/* --- CHAT INPUT BAR --- */}
      <div data-aos="zoom-in" data-aos-delay="600" className="relative z-20 w-full max-w-4xl mt-auto pt-8">
        <div className="bg-white rounded-[30px] shadow-xl shadow-inv-base/5 flex items-center p-2 pl-4 md:pl-6 gap-2 md:gap-4 border border-gray-50">
          
          <button className="p-3 text-gray-400 hover:text-inv-base transition transform hover:scale-110">
            <FaPaperclip size={22} />
          </button>
          
          <input 
            type="text" 
            placeholder="Cari tahu tentang Budaya Indonesia disini..."
            className="flex-1 bg-transparent outline-none font-teachers text-sm md:text-base text-gray-700 py-3 md:py-4 placeholder-gray-400"
          />

          {/* Tombol Send */}
          <button className="bg-inv-base text-white h-[50px] md:h-[60px] px-8 md:px-12 rounded-[25px] hover:bg-roman-coffee-800 transition flex items-center justify-center shadow-md">
            <FaPaperPlane size={20} className="mr-1 mt-1" />
          </button>
          
        </div>
      </div>

    </section>
  );
};

export default AIChatSection;