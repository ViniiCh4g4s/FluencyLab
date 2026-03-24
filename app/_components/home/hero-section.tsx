import { Languages } from "lucide-react"

export function HeroSection() {
    return (
        <div className="relative overflow-hidden bg-linear-to-br from-blue-900 via-blue-700 to-blue-500 px-4 pt-10 pb-16 sm:px-8 sm:pt-14 sm:pb-20 md:px-16 md:pt-16 md:pb-24 lg:px-24">
            {/* Dot grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            {/* Rings */}
            <div
                className="ring-cw absolute rounded-full border border-white/10"
                style={{ width: 260, height: 260, top: -110, right: -100 }}
            />
            <div
                className="ring-ccw absolute rounded-full border border-white/10"
                style={{ width: 160, height: 160, top: -50, right: -50 }}
            />

            <div className="relative z-10 mx-auto max-w-2xl">
                {/* Badge */}
                <div className="anim-1 mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 sm:mb-6">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300 shadow-[0_0_6px_#93C5FD]" />
                    <span className="text-[10px] font-semibold tracking-widest text-white uppercase sm:text-xs">
                        Português → Inglês
                    </span>
                </div>

                {/* Logo */}
                <div className="anim-2 mb-5 flex items-center gap-3 sm:mb-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/15 sm:h-12 sm:w-12">
                        <Languages className="text-white" size={22} />
                    </div>
                    <p className="text-lg leading-none font-extrabold tracking-tight text-white sm:text-2xl">
                        Fluency Lab
                    </p>
                </div>

                {/* Headline */}
                <div className="anim-3">
                    <h1 className="mb-3 text-2xl leading-snug font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
                        Pratique inglês
                        <br />
                        traduzindo de verdade
                    </h1>
                    <p className="max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
                        Receba frases em português e escreva a tradução em inglês — Usando um
                        sistema de Competição com seus amigos.
                    </p>
                </div>
            </div>
        </div>
    )
}
