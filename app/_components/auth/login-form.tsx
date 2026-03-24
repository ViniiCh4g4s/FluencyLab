"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AuthLogo } from "./auth-logo"
import { EmailIcon, LockIcon, EyeIcon, EyeOffIcon } from "./auth-icons"
import { ForgotPasswordDialog } from "./forgot-password-dialog"

export function LoginForm() {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [focused, setFocused] = useState<string | null>(null)
    const [forgotOpen, setForgotOpen] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 60)
        return () => clearTimeout(t)
    }, [])

    const fadeUp = (delay = 0) =>
        `transition-all duration-500 ${delay ? `delay-[${delay}ms]` : ""} ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`

    const fieldClass = (name: string) =>
        `flex items-center gap-3 bg-[#f0f4ff] rounded-xl px-4 h-12 border transition-all duration-200 ${
            focused === name ? "border-blue-400 shadow-sm shadow-blue-100" : "border-transparent"
        }`

    return (
        <>
            <ForgotPasswordDialog
                open={forgotOpen}
                onClose={() => setForgotOpen(false)}
                initialEmail={email}
            />

            <div className={`m-7 relative z-10 w-full max-w-md bg-white rounded-3xl border border-blue-100 shadow-xl shadow-blue-100/40 px-8 py-10 ${fadeUp()}`}>

                <div className={fadeUp(75)}>
                    <AuthLogo />
                </div>

                <div className="flex flex-col gap-4">

                    {/* E-mail */}
                    <div className={fadeUp(100)}>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                            E-mail
                        </label>
                        <div className={fieldClass("email")}>
                            <EmailIcon active={focused === "email"} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setFocused("email")}
                                onBlur={() => setFocused(null)}
                                placeholder="seu@email.com"
                                className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none font-medium"
                            />
                        </div>
                    </div>

                    {/* Senha */}
                    <div className={fadeUp(150)}>
                        <div className="flex items-center justify-between mb-2">
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Senha
                            </label>
                            <button
                                type="button"
                                onClick={() => setForgotOpen(true)}
                                className="text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors"
                            >
                                Esqueceu a senha?
                            </button>
                        </div>
                        <div className={fieldClass("password")}>
                            <LockIcon active={focused === "password"} />
                            <input
                                type={showPass ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setFocused("password")}
                                onBlur={() => setFocused(null)}
                                placeholder="••••••••"
                                className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none font-medium"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="text-slate-400 hover:text-blue-500 transition-colors"
                                tabIndex={-1}
                            >
                                {showPass ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className={`mt-2 ${fadeUp(200)}`}>
                        <button
                            onClick={() => router.push("/home")}
                            type="button"
                            className="relative overflow-hidden w-full h-12 rounded-xl font-bold text-sm text-white bg-gradient-to-br from-blue-500 to-blue-800 shadow-md shadow-blue-400/35 hover:shadow-lg hover:shadow-blue-400/45 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
                        >
                            Entrar
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_2s_infinite]" />
                        </button>
                    </div>
                </div>

                <p className={`text-center text-xs text-slate-400 mt-6 ${fadeUp(320)}`}>
                    Não tem uma conta?{" "}
                    <a href="/register" className="text-blue-500 font-semibold hover:text-blue-700 transition-colors">
                        Criar conta grátis
                    </a>
                </p>
            </div>
        </>
    )
}
