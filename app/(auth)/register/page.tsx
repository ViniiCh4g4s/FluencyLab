import { AuthBackground } from "@/app/_components/auth/auth-background"
import { RegisterForm } from "@/app/_components/auth/register-form"

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-[#f0f4ff] flex items-center justify-center px-4 relative overflow-hidden">
            <AuthBackground />
            <RegisterForm />
        </div>
    )
}
