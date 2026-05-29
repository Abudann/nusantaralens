import NavbarSection from '../components/NavbarSection';
import FooterSection from '../components/FooterSection';
import MapIndonesia from '../components/MapIndonesia';

const InsightPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-bianca-50">
      
      <NavbarSection />
      <main className="flex-1 flex flex-col items-center px-6 pt-32 pb-24 max-w-5xl mx-auto w-full">

        {/* --- AREA PETA INDONESIA --- */}
        <div data-aos="fade-down" className="w-full drop-shadow-xl flex justify-center mb-12 relative z-10">
           <MapIndonesia />
        </div>

        {/* --- KOTAK DESKRIPSI --- */}
        <div data-aos="fade-up" data-aos-delay="200" className="bg-inv-base text-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg w-full max-w-2xl text-left md:text-center mb-16 relative z-10">
           <p className="font-teachers text-sm md:text-base leading-relaxed tracking-wide opacity-90">
             Peta interaktif ini merangkum berbagai data kewilayahan dan profil penduduk secara kolektif. Detail informasi yang ditampilkan disesuaikan dengan ketersediaan data terbaru pada setiap titik koordinat provinsi.
           </p>
        </div>

        {/* --- GRID CARD CHARTS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10">
           
           {/* 1. Card Pie Chart */}
           <div data-aos="fade-right" data-aos-delay="300" className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition duration-300">
              <div className="bg-inv-base text-white text-center py-3.5 px-4 rounded-xl font-base text-lg font-semibold mb-8 shadow-sm">
                Jumlah Laki-laki dan Perempuan
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                {/* Visual Pie Chart Sederhana pakai Border Tailwind */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-[16px] border-t-red-500 border-r-blue-400 border-b-inv-base border-l-yellow-400 mb-8 drop-shadow-md"></div>
                <p className="text-gray-600 font-teachers text-sm text-center leading-relaxed">
                  Berdasarkan pada data BPS jumlah populasi Pria di seluruh pulau sumatra sebesar 65%, sedangkan untuk populasi Wanita sebanyak 35%.
                </p>
              </div>
           </div>

           {/* 2. Card Bar Chart */}
           <div data-aos="fade-left" data-aos-delay="400" className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition duration-300">
              <div className="bg-inv-base text-white text-center py-3.5 px-4 rounded-xl font-base text-lg font-semibold mb-8 shadow-sm">
                Jumlah Budaya
              </div>
              <div className="flex-1 flex flex-col items-center justify-center w-full">
                {/* Visual Bar Chart Sederhana */}
                <div className="w-full h-40 md:h-48 flex items-end justify-around gap-2 mb-8 px-2 md:px-4">
                  <div className="w-6 md:w-8 h-[60%] bg-red-400 rounded-t-sm"></div>
                  <div className="w-6 md:w-8 h-[50%] bg-orange-400 rounded-t-sm"></div>
                  <div className="w-6 md:w-8 h-[80%] bg-yellow-400 rounded-t-sm"></div>
                  <div className="w-6 md:w-8 h-[70%] bg-[#50a89d] rounded-t-sm"></div>
                  <div className="w-6 md:w-8 h-[45%] bg-blue-400 rounded-t-sm"></div>
                  <div className="w-6 md:w-8 h-[30%] bg-purple-400 rounded-t-sm"></div>
                  <div className="w-6 md:w-8 h-[20%] bg-gray-300 rounded-t-sm"></div>
                </div>
                <p className="text-gray-600 font-teachers text-sm text-center leading-relaxed">
                  Berdasarkan jumlah data dari BPS jumlah budaya yang ada di pulau sumatra adalah 150, dimana pulau Sumatra Barat 50% dan aceh 50%.
                </p>
              </div>
           </div>

        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default InsightPage;