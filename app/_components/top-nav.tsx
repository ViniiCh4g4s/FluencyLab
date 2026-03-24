"use client"

import { usePathname, useRouter } from "next/navigation"
import { BarChart2, Calendar, Home, Languages, User } from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import { cn } from "@/app/_lib/utils"

const items = [
    { href: "/home", icon: Home, label: "Início" },
    { href: "/progress", icon: Calendar, label: "Progresso" },
    { href: "/ranking", icon: BarChart2, label: "Ranking" },
    { href: "/profile", icon: User, label: "Perfil" },
]

export function TopNav() {
    const pathname = usePathname()
    const router = useRouter()

    if (pathname === "/login" || pathname === "/register" || pathname === "/") return null // ← adiciona essa linha

    return (
        <>
            {/*Dispositivos Móveis*/}
            <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-center border-b border-slate-100 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)] md:hidden">
                <div className="flex items-center gap-2 text-[17px] font-bold tracking-tight text-slate-900">
                    <Languages className="text-blue-600" size={20} />
                    FluencyLab
                </div>
            </nav>
            {/*Dispositivos Desktop*/}
            <nav className="sticky top-0 z-50 hidden h-16 w-full items-center gap-1 border-b border-slate-100 bg-white px-8 shadow-[0_1px_4px_rgba(0,0,0,0.04)] md:flex">
                <div className="mr-auto flex items-center gap-2 text-[17px] font-bold tracking-tight text-slate-900">
                    <Languages className="text-blue-600" size={20} />
                    FluencyLab
                </div>

                {items.map((item) => (
                    <Button
                        key={item.href}
                        variant="ghost"
                        size="sm"
                        onClick={() => router.push(item.href)}
                        className={cn(
                            "gap-1.5 rounded-[10px] font-medium hover:bg-slate-50 hover:text-slate-700",
                            pathname === item.href
                                ? "bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
                                : "text-slate-500"
                        )}
                    >
                        <item.icon size={16} />
                        {item.label}
                    </Button>
                ))}

                <Button
                    size="sm"
                    onClick={() => router.push("/practice")}
                    className={cn(
                        "ml-2 gap-1.5 rounded-[10px] bg-[#2B54FF] font-semibold text-white hover:bg-[#2B54FF]/90",
                        pathname === "/practice"
                            ? "shadow-[0_2px_20px_rgba(37,99,235,0.4)]"
                            : "shadow-[0_2px_10px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_16px_rgba(37,99,235,0.4)]"
                    )}
                >
                    <Languages size={16} />
                    Praticar
                </Button>
            </nav>
        </>
    )
}
