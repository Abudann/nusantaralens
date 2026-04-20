import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-nl-green text-nl-cream min-h-screen flex flex-col justify-center px-8 md:px-16 relative overflow-hidden pt-20">
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto">
        
        {/* Teks Sebelah Kiri */}
        <div className="md:w-1/2 z-10 mt-10 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-bold font-teachers leading-tight mb-6">
            Jelajahi Kekayaan <br />
            <span className="text-nl-brown">Budaya Indonesia</span>
          </h1>
          <p className="text-base md:text-lg font-merriweather mb-10 max-w-lg leading-relaxed text-gray-300">
            Dari keberanian para pahlawan hingga keajaiban bahasa daerah. Jelajahi warisan agung Nusantara yang mendunia dalam satu platform terpadu.
          </p>
          
          <button className="flex items-center gap-3 bg-white text-nl-green px-6 py-3 rounded-full font-bold font-merriweather hover:bg-gray-200 transition shadow-lg w-max">
            Mulai Menjelajah
            <span className="bg-nl-green text-white p-2 rounded-full">
              <FaArrowRight size={12} />
            </span>
          </button>
        </div>

        {/* Gambar Sebelah Kanan (Placeholder Kotak Abu-abu) */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 z-10 w-full">
          <div className="w-full max-w-md aspect-[4/5] bg-gray-500 rounded-lg flex items-center justify-center text-white font-merriweather shadow-2xl border-4 border-dashed border-gray-400">
            [Placeholder Gambar Pahlawan]
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;