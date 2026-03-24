import {Languages} from "lucide-react"

export function HeroSection() {
    return (
        <div className="relative bg-linear-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden
                        px-4 sm:px-8 md:px-16 lg:px-24
                        pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24">

            {/* Dot grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            {/* Rings */}
            <div className="ring-cw absolute rounded-full border border-white/10"
                style={{ width: 260, height: 260, top: -110, right: -100 }} />
            <div className="ring-ccw absolute rounded-full border border-white/10"
                style={{ width: 160, height: 160, top: -50, right: -50 }} />

            <div className="relative z-10 max-w-2xl mx-auto">

                {/* Badge */}
                <div className="anim-1 inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-3 py-1 mb-5 sm:mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse shadow-[0_0_6px_#93C5FD]" />
                    <span className="text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                        Português → Inglês
                    </span>
                </div>

                {/* Logo */}
                <div className="anim-2 flex items-center gap-3 mb-5 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-xl bg-white/15 border border-white/30">
                        <Languages className="text-white" size={22} />
                    </div>
                    <p className="text-white font-extrabold text-lg sm:text-2xl tracking-tight leading-none">
                        Fluency Lab
                    </p>
                </div>

                {/* Headline */}
                <div className="anim-3">
                    <h1 className="text-white font-extrabold leading-snug tracking-tight mb-3 text-2xl sm:text-3xl md:text-4xl">
                        Pratique inglês<br />
                        traduzindo de verdade
                    </h1>
                    <p className="text-white/70 leading-relaxed max-w-sm text-sm sm:text-base">
                        Receba frases em português e escreva a tradução em inglês —
                        Usando um sistema de Competição com seus amigos.
                    </p>
                </div>

            </div>
        </div>
    )
}
