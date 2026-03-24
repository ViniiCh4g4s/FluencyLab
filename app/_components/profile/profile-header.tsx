import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@/app/_components/ui/avatar"

type Props = {
    name: string
    rankLabel: string
    avatarSrc?: string
    children?: React.ReactNode // slot para o botão "Editar Perfil"
}

export function ProfileHeader({ name, rankLabel, avatarSrc, children }: Props) {
    const initials = name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")

    return (
        <div className="overflow-hidden rounded-2xl border border-[#dce8ff] bg-white shadow-[0_8px_32px_rgba(37,99,235,0.13)] sm:rounded-3xl">
            {/* Banner */}
            <div
                className="relative h-20 sm:h-28"
                style={{
                    background: "linear-gradient(270deg,#1d4ed8 10%,#2563eb 50%,#60a5fa 100%)",
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="px-4 pb-5 sm:px-8 sm:pb-8">
                {/* Avatar */}
                <div className="relative -mt-9 mb-2 inline-block sm:-mt-11 sm:mb-3">
                    <div
                        className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-4 border-white shadow-[0_4px_16px_rgba(37,99,235,0.35)] sm:h-[88px] sm:w-[88px]"
                        style={{ background: "linear-gradient(135deg,#1d4ed8,#60a5fa)" }}
                    >
                        <Avatar className="h-full w-full">
                            {avatarSrc && <AvatarImage src={avatarSrc} alt={name} />}
                            <AvatarFallback>{initials}</AvatarFallback>
                            <AvatarBadge className="bg-green-600" />
                        </Avatar>
                    </div>
                </div>

                {/* Nome + ranking + ação */}
                <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3">
                    <div>
                        <h1 className="text-lg leading-tight font-black text-[#1e293b] sm:text-[1.35rem]">
                            {name}
                        </h1>
                        <div
                            className="mt-1.5 inline-flex items-center rounded-full border border-[#f5a623] px-2.5 py-1 text-xs font-extrabold text-[#b07a00] sm:mt-2 sm:px-3.5 sm:py-1.5 sm:text-sm"
                            style={{ background: "linear-gradient(135deg,#fff8e7,#ffe9b0)" }}
                        >
                            {rankLabel}
                        </div>
                    </div>

                    {/* Botão de ação (client component passado como filho) */}
                    {children}
                </div>
            </div>
        </div>
    )
}
