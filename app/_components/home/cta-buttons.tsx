export function CtaButtons() {
    return (
        <div className="anim-2 flex flex-col gap-3">

            <a
                href="/register"
                className="relative overflow-hidden flex items-center justify-center gap-2 w-full h-12 rounded-xl font-bold text-sm text-white bg-gradient-to-br from-blue-500 to-blue-800 shadow-md shadow-blue-400/35 hover:shadow-lg hover:shadow-blue-400/45 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" y1="8" x2="19" y2="14" />
                    <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
                Criar conta grátis
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_2s_infinite]" />
            </a>

            <a
                href="/login"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-xl font-bold text-sm text-blue-600 bg-[#f0f4ff] border border-blue-200 hover:border-blue-400 hover:shadow-sm hover:shadow-blue-100 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                Já tenho conta — Entrar
            </a>

        </div>
    )
}
