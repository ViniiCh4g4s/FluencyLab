import { AuthBackground } from "@/app/_components/auth/auth-background"
import { LoginForm } from "@/app/_components/auth/login-form"

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#f0f4ff] flex items-center justify-center px-4 relative overflow-hidden">
            <AuthBackground />
            <LoginForm />
        </div>
    )
}
