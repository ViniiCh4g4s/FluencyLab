"use client";
import { useEffect, useState } from "react";
 
 
const user = {
  name: "Marcus Vinicius",
  level: 2,
  xp: 300,
  xpNeeded: 500,
  streak: 7,
  stats: { translations: 20, accuracy: 70, minutesToday: 45 },
};
 
const ranking = [
  { pos: 1, name: "João",  xp: 500, tier: "gold",   initials: "J", pct: 100 },
  { pos: 2, name: "Maria", xp: 450, tier: "silver",  initials: "M", pct: 90  },
  { pos: 3, name: "Pedro", xp: 400, tier: "bronze",  initials: "P", pct: 80  },
];
 
const navItems = [
  { label: "Início",    active: true,  icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>) },
  { label: "Progresso", active: false, icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>) },
  { label: "Ranking",   active: false, icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>) },
  { label: "Perfil",    active: false, icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>) },
];
 
// tier color maps
const tierColors = {
  gold:   { pos: "text-amber-500",  bar: "from-amber-400 to-orange-400", ring: "border-amber-300/40 bg-amber-50" },
  silver: { pos: "text-slate-400",  bar: "from-slate-400 to-slate-500",  ring: "border-slate-300/40" },
  bronze: { pos: "text-orange-700", bar: "from-orange-700 to-orange-500",ring: "border-orange-300/40" },
};
 
const avatarColors = {
  J: "from-blue-600 to-blue-800",
  M: "from-emerald-500 to-cyan-600",
  P: "from-orange-500 to-red-500",
};
 
// ── animation hook ─────────────────────────────────────────────
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t); }, []);
  return mounted;
}



export default function Home() {
  return (
    
    <div className="mx-auto min-h-dvh relative bg-white pb-24 px-4 sm:px-6 lg:px-8">


      {/* bem-vindo */}
     <div className="mb-2 transition-all duration-500  mt-[5%]"
          style={{ opacity: 1, transform: "translateY(0)" }}>
      <p className="text-sm text-slate-400 font-medium mb-1">👋 Olá de volta,</p>
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
        Bem-vindo, <span className="text-blue-600">{user.name}!</span>
      </h1>
      <span className="inline-flex items-center gap-1.5 mt-3 px-3.5 py-1.5 rounded-full text-xs font-bold
                       text-orange-600 bg-orange-50 border border-orange-200/60
                       animate-pulse">
        🔥 {user.streak} dias em sequência — continue assim!
      </span>
    </div>


      
      <div className="flex flex-col m-5">
        {/* Nível Atual */}
        <div className="mt-[4%] bg-[#26658C] p-4 rounded-2xl w-full flex flex-col p-[35px]">
          <p className="text-2xl text-white">Nivel Atual </p>

          <div className="flex flex-row gap-4 mt-2 justify-between">
            <p className="text-white text-xl">2</p>
            <div>
              <p className="text-white text-xl">7 Dias</p>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-2 justify-between">
            <p className="text-white text-xs">300xp</p>
            <div>
              <p className="text-white text-xs">500xp</p>
            </div>
          </div>

   
          <div className="w-full bg-gray-300 rounded-full h-2 mt-4"></div>
          

        </div>

        {/* Conteúdo Recomendado */}
        <div className="mt-4 flex flex-row gap-4 mt-[10%] mb-[10%] h-50 w-full">

          <div className="bg-gray-200 p-4 rounded-lg w-[50%] flex flex-col justify-center items-center">

            <div className=" bg-green-300 p-3 rounded-full mb-2">✔️</div>

            <p className="text-3xl text-olive-900">20</p>

            <p className="text-gray-500 text-sm m-2">Traduções</p>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg w-[50%] flex flex-col justify-center items-center">

            <div className=" bg-red-300 p-3 rounded-full mb-2">🔥</div>

            <p className="text-3xl text-olive-900">70%</p>

            <p className="text-gray-500 text-sm m-2">Precisão</p>
          </div>

        </div>

        {/* Pratica */}

        <div className="mt-2 bg-[#26658C] p-4 rounded-xl w-full flex flex-col justify-center items-center">

          <p className="text-lg text-white p-4 text-center">O FluencyLab é um aplicativo de aprendizado de idiomas que utiliza inteligência artificial para ajudar os usuários a praticarem suas habilidades linguísticas de forma eficaz e personalizada.</p>

          <button className="mt-2 bg-white text-[#0D1B2A] hover:bg-gray-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 py-2 px-4 rounded-md mt-3 w-full transition-colors duration-300">

            Ir Praticar!
          </button>
        </div>

        {/* ranking top3 */}

        <div className="flex flex-col ">
          <div className="ms-4">
            <h2 className="text-xl font-bold mt-4 mb-2">Ranking Top 3</h2>
          </div>

          <div className="flex flex-row gap-4 mt-2 justify-between ms-2">

            <div className="bg-gray-200  p-[8%] rounded-lg   hover:bg-gray-300 transition-colors duration-300 ">
              <h1 className="text-lg">1. João</h1>
              <p className="text-sm text-gray-500">500xp</p>
            </div>

            <div className="bg-gray-200  p-[8%] rounded-lg hover:bg-gray-300 transition-colors duration-300 ">
              <h1 className="text-lg">2. Maria</h1>
              <p className="text-sm text-gray-500">450xp</p>
            </div>

            <div className="bg-gray-200  p-[8%] rounded-lg hover:bg-gray-300 transition-colors duration-300 ">
              <h1 className="text-lg">3. Pedro</h1>
              <p className="text-sm text-gray-500">400xp</p>
            </div>

          </div>
        </div>






      </div>
    </div>
  )
}
