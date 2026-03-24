import { Languages } from "lucide-react"

export function AuthLogo() {
    return (
        <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-400/30 mb-4">
                <Languages className="text-white" size={22} />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                FluencyLab
            </h1>
        </div>
    )
}
