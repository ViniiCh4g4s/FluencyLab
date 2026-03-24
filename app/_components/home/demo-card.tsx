"use client"

import { useState, useEffect, useRef } from "react"

const PAIRS = [
    { pt: "Eu gosto de aprender idiomas.", en: "I like to learn languages." },
    { pt: "Onde fica a estação de metrô?", en: "Where is the subway station?" },
    { pt: "Ela trabalha todos os dias.", en: "She works every day." },
    { pt: "Você fala inglês?", en: "Do you speak English?" },
    { pt: "Preciso de ajuda, por favor.", en: "I need help, please." },
]

function useTyping() {
    const [ptText, setPtText] = useState(PAIRS[0].pt)
    const [enText, setEnText] = useState("")
    const ref = useRef({ ci: 0, typing: true, pi: 0 })

    useEffect(() => {
        let t: NodeJS.Timeout
        const tick = () => {
            const s = ref.current
            const pair = PAIRS[s.pi]
            if (s.typing) {
                if (s.ci <= pair.en.length) {
                    setEnText(pair.en.slice(0, s.ci++))
                    t = setTimeout(tick, 52)
                } else {
                    s.typing = false
                    t = setTimeout(tick, 2000)
                }
            } else {
                if (s.ci > 0) {
                    setEnText(pair.en.slice(0, --s.ci))
                    t = setTimeout(tick, 26)
                } else {
                    s.pi = (s.pi + 1) % PAIRS.length
                    setPtText(PAIRS[s.pi].pt)
                    s.typing = true
                    t = setTimeout(tick, 380)
                }
            }
        }
        t = setTimeout(tick, 1400)
        return () => clearTimeout(t)
    }, [])

    return { ptText, enText }
}

export function DemoCard() {
    const { ptText, enText } = useTyping()

    return (
        <div className="anim-4 -mt-8 sm:-mt-12 shrink-0 bg-white rounded-2xl border border-blue-50 shadow-[0_6px_32px_rgba(18,73,199,0.13)] px-4 sm:px-5 pt-4 pb-3">
            <p className="text-[9.5px] sm:text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-3">
                ✦ Veja como funciona
            </p>

            <div className="flex flex-col gap-2">
                {/* PT */}
                <div className="rounded-xl px-3 py-2.5 bg-blue-50 border border-blue-200">
                    <p className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">
                        🇧🇷 Frase em Português
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                        {ptText}
                    </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                    <div className="w-6 h-6 shrink-0 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_2px_8px_rgba(37,99,235,0.3)]">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                            stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <polyline points="19 12 12 19 5 12" />
                        </svg>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                </div>

                {/* EN */}
                <div className="rounded-xl px-3 py-2.5 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300">
                    <p className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-blue-500 mb-1">
                        🇺🇸 Sua tradução em Inglês
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-blue-800 leading-snug">
                        {enText}
                        <span className="inline-block w-0.5 h-3.5 bg-blue-600 rounded-sm align-middle ml-px animate-pulse" />
                    </p>
                </div>
            </div>
        </div>
    )
}
