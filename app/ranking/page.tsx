"use client";

import { useState, useMemo } from "react";

const students = [
  { name: "Samuel",   points: 2000 },
  { name: "Isabella", points: 1900 },
  { name: "Pedro",    points: 1800 },
  { name: "Milena",   points: 1650 },
  { name: "Bruno",    points: 1550 },
  { name: "Jessica",  points: 1450 },
  { name: "Bruna",    points: 1350 },
  { name: "João",     points: 1250 },
  { name: "Manuella", points: 1150 },
  { name: "Luiz",     points: 1050 },
];

const MEDAL_EMOJI = ["🥇", "🥈", "🥉"];

const podiumConfig = [
  {
    ring:   "ring-2 ring-yellow-400",
    bg:     "bg-gradient-to-b from-yellow-50 to-amber-100",
    bar:    "bg-yellow-400",
    barH:   "h-32",
    text:   "text-yellow-700",
    pts:    "text-yellow-700",
    order:  "order-2",
    offset: "mt-0",
    size:   "w-36",
  },
  {
    ring:   "ring-2 ring-slate-300",
    bg:     "bg-gradient-to-b from-slate-100 to-slate-200",
    bar:    "bg-slate-300",
    barH:   "h-20",
    text:   "text-slate-500",
    pts:    "text-slate-600",
    order:  "order-1",
    offset: "mt-8",
    size:   "w-28",
  },
  {
    ring:   "ring-2 ring-orange-300",
    bg:     "bg-gradient-to-b from-orange-50 to-orange-100",
    bar:    "bg-orange-300",
    barH:   "h-14",
    text:   "text-orange-500",
    pts:    "text-orange-600",
    order:  "order-3",
    offset: "mt-12",
    size:   "w-28",
  },
];

const displayOrder = [1, 0, 2];

const AVATAR_EMOJIS = [
  "😄","😎","🤩","🥳","😏","🤓","😇","🥸","😍","🤑",
  "😜","🧐","😤","🤯","😈","👻","🤠","😺","🦸","🧙",
];

function Avatar({ name, size = "lg" }) {
  const emoji = AVATAR_EMOJIS[name.charCodeAt(0) % AVATAR_EMOJIS.length];
  const colors = [
    "bg-slate-700", "bg-zinc-800", "bg-neutral-700",
    "bg-stone-800", "bg-gray-700", "bg-slate-800",
  ];
  const color = colors[name.charCodeAt(0) % colors.length];
  const sz = size === "lg" ? "w-14 h-14 text-3xl" : "w-9 h-9 text-xl";
  return (
    <div className={`${color} ${sz} rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-slate-600`}>
      {emoji}
    </div>
  );
}

export default function FluencyLabRanking() {
  const [query, setQuery] = useState("");

  // Ranking completo com posição real de cada aluno
  const ranked = useMemo(() =>
    [...students]
      .sort((a, b) => b.points - a.points)
      .map((s, i) => ({ ...s, position: i + 1 })),
    []
  );

  // Filtra mantendo a posição real
  const filtered = useMemo(() =>
    ranked.filter(s => s.name.toLowerCase().includes(query.toLowerCase())),
    [query, ranked]
  );

  const isSearching = query.trim().length > 0;

  const top3 = !isSearching ? ranked.slice(0, 3) : [];
  const listItems = !isSearching ? ranked.slice(3) : filtered;

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <main className="max-w-3xl mx-auto px-4 py-10">

        
        <div className="mb-10">
          <div className="relative w-72">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔎</span>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar aluno..."
              className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-700 placeholder-slate-400 shadow-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200 transition-all"
            />
          </div>
        </div>

        {top3.length > 0 && (
          <div className="flex justify-center items-end gap-4 mb-12">
            {displayOrder.map((realIdx) => {
              const student = top3[realIdx];
              if (!student) return null;
              const cfg = podiumConfig[realIdx];
              return (
                <div key={student.name} className={`flex flex-col items-center ${cfg.order} ${cfg.offset} ${cfg.size}`}>
                  <div className={`w-full ${cfg.bg} ${cfg.ring} rounded-2xl p-4 flex flex-col items-center gap-2 shadow-md hover:-translate-y-1 transition-transform duration-300`}>
                    <span className="text-3xl leading-none">{MEDAL_EMOJI[realIdx]}</span>
                    <Avatar name={student.name} size="lg" />
                    <p className="font-bold text-slate-800 text-sm text-center leading-tight mt-1">
                      {student.name}
                    </p>
                    <span className={`text-xs font-bold ${cfg.pts}`}>
                      {student.points.toLocaleString()} pts
                    </span>
                  </div>
                  <div className={`w-full ${cfg.bar} ${cfg.barH} rounded-b-xl flex items-center justify-center`}>
                    <span className={`text-xs font-extrabold ${cfg.text} uppercase tracking-widest`}>
                      #{student.position}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        
        {listItems.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md overflow-hidden divide-y divide-slate-100">
            {listItems.map((student) => (
              <div
                key={student.name}
                className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors"
              >
                <span className="w-10 text-center text-xs font-extrabold text-teal-600 shrink-0">
                  #{student.position}
                </span>
                <Avatar name={student.name} size="sm" />
                <span className="flex-1 text-slate-700 font-semibold text-sm">
                  {student.name}
                </span>
                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  {student.points.toLocaleString()} pts
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && isSearching && (
          <div className="py-16 text-center text-slate-400 text-sm bg-white rounded-2xl shadow-sm">
            Nenhum aluno encontrado.
          </div>
        )}

      </main>
    </div>
  );
}