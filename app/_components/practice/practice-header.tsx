import { StarIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"
import { cn } from "@/app/_lib/utils"

type Props = {
    // Dificuldade atualmente selecionada
    difficulty: string
    // Callback ao trocar a dificuldade
    onChangeDifficulty: (value: string) => void
    // Se a frase atual está favoritada
    isFav: boolean
    // Se a animação de pop do favorito está ativa
    justFavorited: boolean
    // Callback ao clicar no botão de favoritar
    onToggleFavorite: () => void
}

export function PracticeHeader({
    difficulty,
    onChangeDifficulty,
    isFav,
    justFavorited,
    onToggleFavorite,
}: Props) {
    return (
        <div className="mb-6 flex items-center justify-between">
            {/* Tabs de dificuldade — controladas e persistidas no localStorage */}
            <Tabs value={difficulty} onValueChange={onChangeDifficulty} className="w-fit">
                <TabsList>
                    <TabsTrigger value="easy" className="px-5">
                        Fácil
                    </TabsTrigger>
                    <TabsTrigger value="medium" className="px-5">
                        Médio
                    </TabsTrigger>
                    <TabsTrigger value="hard" className="px-5">
                        Difícil
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            {/* Badge clicável que alterna entre "Favoritar" e "Favoritada" */}
            <button
                onClick={onToggleFavorite}
                className={cn(
                    "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 select-none",
                    isFav
                        ? "border-blue-600 bg-blue-600 text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)]"
                        : "border-slate-300 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-500",
                    justFavorited && "scale-125"
                )}
            >
                <StarIcon
                    className={cn("size-4 transition-all duration-200", isFav && "fill-white")}
                />
                {isFav ? "Favoritada" : "Favoritar"}
            </button>
        </div>
    )
}
