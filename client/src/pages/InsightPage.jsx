import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarSection from '../components/NavbarSection';
import FooterSection from '../components/FooterSection';
import MapIndonesia from '../components/MapIndonesia';

const InsightPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const initialIsland = location.state?.selectedIsland || 'Pulau_Sumatera';
  const [activeIsland, setActiveIsland] = useState(initialIsland);

  const islandData = {
    Pulau_Sumatera: {
      name: "Pulau Sumatera (Aceh)",
      descPie: "Berdasarkan pada data BPS jumlah populasi Pria di Sumatera sebesar 65%, sedangkan populasi Wanita sebanyak 35%.",
      descBar: "Menjadi salah satu target MVP NusantaraLens, Aceh memiliki kekayaan budaya dan pahlawan nasional yang melimpah.",
      pieData: { pria: 65, wanita: 35 },
      barHeights: [70, 50, 80, 60, 45, 30]
    },
    Pulau_Jawa: {
      name: "Pulau Jawa (Yogyakarta)",
      descPie: "Di Pulau Jawa, persentase populasi cukup seimbang dengan 51% populasi Pria dan 49% populasi Wanita.",
      descBar: "Yogyakarta dipilih sebagai salah satu daerah MVP karena merupakan pusat pelestarian tradisi dan budaya keraton Jawa.",
      pieData: { pria: 51, wanita: 49 },
      barHeights: [90, 80, 60, 85, 55, 40]
    },
    Pulau_Kalimantan: {
      name: "Pulau Kalimantan",
      descPie: "Populasi di Kalimantan terdiri dari 55% Pria dan 45% Wanita, dengan sebaran penduduk terpusat di area pesisir dan sungai.",
      descBar: "Kalimantan memiliki kekayaan budaya suku Dayak dan Banjar, dengan lebih dari 120 sub-budaya yang tersebar.",
      pieData: { pria: 55, wanita: 45 },
      barHeights: [50, 40, 70, 55, 80, 65]
    },
    Pulau_Sulawesi: {
      name: "Pulau Sulawesi",
      descPie: "Rasio gender di Sulawesi menunjukkan 48% Pria dan 52% Wanita, menjadikannya pulau dengan populasi wanita lebih dominan.",
      descBar: "Suku Bugis, Makassar, Toraja, dan Minahasa mewarnai lebih dari 200 tradisi budaya unik yang ada di Sulawesi.",
      pieData: { pria: 48, wanita: 52 },
      barHeights: [60, 75, 45, 90, 30, 50]
    },
    Pulau_Papua: {
      name: "Pulau Papua",
      descPie: "Data kependudukan Papua menunjukkan populasi Pria sebesar 53% dan Wanita sebesar 47%, tersebar di wilayah pegunungan.",
      descBar: "Papua merupakan surga keragaman etnis dengan lebih dari 250 suku bangsa dan bahasa daerah yang berbeda-beda.",
      pieData: { pria: 53, wanita: 47 },
      barHeights: [40, 60, 90, 70, 85, 30]
    },
    NTT: {
      name: "Nusa Tenggara Timur",
      descPie: "Populasi di NTT menunjukkan keseimbangan gender yang stabil dengan 50% Pria dan 50% Wanita.",
      descBar: "NTT menjadi salah satu fokus MVP NusantaraLens untuk menonjolkan kekayaan tradisi lokal seperti Pasola dan tenun ikat.",
      pieData: { pria: 50, wanita: 50 },
      barHeights: [85, 65, 40, 75, 90, 55]
    },
    Default: {
      name: "Kepulauan Indonesia",
      descPie: "Rasio gender di wilayah kepulauan ini rata-rata menunjukkan keseimbangan antara populasi Pria dan Wanita (50% Pria, 50% Wanita).",
      descBar: "Wilayah kepulauan menyimpan kekayaan tradisi bahari dan percampuran budaya yang sangat unik.",
      pieData: { pria: 50, wanita: 50 },
      barHeights: [30, 40, 50, 60, 45, 35]
    }
  };

  const currentData = islandData[activeIsland] || islandData.Default;

  return (
    <div className="w-full min-h-screen flex flex-col bg-bianca-50">
      <div className="bg-[#9E7D5C] shadow-md z-50">
        <NavbarSection isAbsoluteBg={true} />
      </div>
      
      <main className="flex-1 flex flex-col items-center px-4 md:px-6 pt-32 pb-24 max-w-5xl mx-auto w-full">
        
        {/* --- AREA PETA INDONESIA --- */}
        {/* justify-center diubah jadi justify-start di HP, baru justify-center di MD */}
        <div data-aos="fade-down" className="w-full max-w-7xl mx-auto drop-shadow-xl flex justify-start md:justify-center mb-12 relative z-10 overflow-x-auto md:overflow-x-visible pb-4 hide-scrollbar">
           {/* min-w diturunkan jadi 600px di HP agar tidak terlalu raksasa, pr-8 agar sisi kanan Papua tidak mentok */}
           <div className="min-w-[600px] md:min-w-[800px] w-full pr-8 md:pr-0 pl-4 md:pl-0">
              <MapIndonesia onPilihPulau={setActiveIsland} />
           </div>
        </div>

        {/* --- KOTAK DESKRIPSI --- */}
        <div data-aos="fade-up" className="bg-inv-base text-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg w-full max-w-2xl text-left md:text-center mb-16 relative z-10 transition-all duration-500">
           <h3 className="font-base text-xl md:text-2xl font-bold mb-3 text-inv-accent transition-all duration-300">
             {currentData.name}
           </h3>
           <p className="font-teachers text-sm md:text-base leading-relaxed tracking-wide opacity-90">
             Peta interaktif ini merangkum berbagai data kewilayahan dan profil penduduk secara kolektif. Detail informasi yang ditampilkan disesuaikan dengan ketersediaan data terbaru pada setiap titik koordinat provinsi.
           </p>
        </div>

        {/* --- GRID CARD CHARTS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10">
           
           <div data-aos="fade-up" className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition duration-300">
              <div className="bg-inv-base text-white text-center py-3.5 px-4 rounded-xl font-base text-lg font-semibold mb-8 shadow-sm">
                Jumlah Laki-laki dan Perempuan
              </div>
              <div className="flex-1 flex flex-col items-center justify-center relative">
                <div 
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full mb-8 drop-shadow-md flex items-center justify-center transition-all duration-700 ease-in-out"
                  style={{ background: `conic-gradient(#ef4444 0% ${currentData.pieData.wanita}%, #3b82f6 ${currentData.pieData.wanita}% 100%)` }}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                     <span className="text-blue-500 font-bold text-sm">Pria: {currentData.pieData.pria}%</span>
                     <span className="text-red-500 font-bold text-sm">Wanita: {currentData.pieData.wanita}%</span>
                  </div>
                </div>
                <p className="text-gray-600 font-teachers text-sm text-center leading-relaxed h-20 transition-all duration-500">
                  {currentData.descPie}
                </p>
              </div>
           </div>

           <div data-aos="fade-up" data-aos-delay="100" className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition duration-300">
              <div className="bg-inv-base text-white text-center py-3.5 px-4 rounded-xl font-base text-lg font-semibold mb-8 shadow-sm">
                Jumlah Budaya
              </div>
              <div className="flex-1 flex flex-col items-center justify-center w-full">
                <div className="w-full h-40 md:h-48 flex items-end justify-around gap-2 mb-8 px-2 md:px-4">
                  <div className="w-6 md:w-8 bg-red-400 rounded-t-sm transition-all duration-700 ease-out" style={{height: `${currentData.barHeights[0]}%`}}></div>
                  <div className="w-6 md:w-8 bg-orange-400 rounded-t-sm transition-all duration-700 ease-out" style={{height: `${currentData.barHeights[1]}%`}}></div>
                  <div className="w-6 md:w-8 bg-yellow-400 rounded-t-sm transition-all duration-700 ease-out" style={{height: `${currentData.barHeights[2]}%`}}></div>
                  <div className="w-6 md:w-8 bg-[#50a89d] rounded-t-sm transition-all duration-700 ease-out" style={{height: `${currentData.barHeights[3]}%`}}></div>
                  <div className="w-6 md:w-8 bg-blue-400 rounded-t-sm transition-all duration-700 ease-out" style={{height: `${currentData.barHeights[4]}%`}}></div>
                  <div className="w-6 md:w-8 bg-purple-400 rounded-t-sm transition-all duration-700 ease-out" style={{height: `${currentData.barHeights[5]}%`}}></div>
                </div>
                <p className="text-gray-600 font-teachers text-sm text-center leading-relaxed h-20 transition-all duration-500">
                  {currentData.descBar}
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