"use client"

import { useState } from "react"
import {
    Dialog, DialogContent, DialogHeader,
    DialogTitle, DialogDescription, DialogClose,
} from "@/app/_components/ui/dialog"
import { Button } from "@/app/_components/ui/button"

type TermsType = "terms" | "privacy" | null

export function TermsFooter() {
    const [open, setOpen] = useState<TermsType>(null)

    return (
        <>
            <p className="anim-7 shrink-0 text-center text-[10.5px] sm:text-xs text-slate-400 pt-3 pb-1">
                Ao continuar, você aceita os{" "}
                <button
                    onClick={() => setOpen("terms")}
                    className="text-blue-600 font-semibold hover:underline"
                >
                    Termos de Uso
                </button>{" "}
                e a{" "}
                <button
                    onClick={() => setOpen("privacy")}
                    className="text-blue-600 font-semibold hover:underline"
                >
                    Política de Privacidade
                </button>
            </p>

            {/* Termos de Uso */}
            <Dialog open={open === "terms"} onOpenChange={(v) => !v && setOpen(null)}>
                <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Termos de Uso</DialogTitle>
                        <DialogDescription>Última atualização: março de 2025</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                        <p>
                            Bem-vindo ao <strong className="text-slate-900">FluencyLab</strong>. Ao utilizar nossa plataforma, você concorda com os seguintes termos.
                        </p>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">1. Uso da plataforma</h3>
                            <p>O FluencyLab é destinado ao aprendizado de idiomas por meio de tradução e prática gamificada. O uso é pessoal e não comercial.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">2. Conta de usuário</h3>
                            <p>Você é responsável pela segurança das suas credenciais. Não compartilhe sua senha com terceiros.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">3. Conduta</h3>
                            <p>É proibido usar a plataforma para fins ilícitos, difamar outros usuários ou tentar comprometer a segurança do sistema.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">4. Propriedade intelectual</h3>
                            <p>Todo o conteúdo da plataforma — incluindo frases, design e código — é propriedade do FluencyLab e protegido por direitos autorais.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">5. Modificações</h3>
                            <p>Podemos atualizar estes termos a qualquer momento. O uso continuado da plataforma após as alterações implica na aceitação das mesmas.</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <DialogClose asChild>
                            <Button>Entendi</Button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Política de Privacidade */}
            <Dialog open={open === "privacy"} onOpenChange={(v) => !v && setOpen(null)}>
                <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Política de Privacidade</DialogTitle>
                        <DialogDescription>Última atualização: março de 2025</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                        <p>
                            O <strong className="text-slate-900">FluencyLab</strong> leva a sua privacidade a sério. Esta política descreve como coletamos e usamos seus dados.
                        </p>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">1. Dados coletados</h3>
                            <p>Coletamos nome, e-mail, dados de progresso (XP, nível, sequência) e informações de uso para melhorar a experiência.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">2. Uso dos dados</h3>
                            <p>Seus dados são usados exclusivamente para personalizar sua experiência, exibir rankings e enviar notificações relacionadas ao aprendizado.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">3. Compartilhamento</h3>
                            <p>Não vendemos nem compartilhamos seus dados pessoais com terceiros, exceto quando exigido por lei.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">4. Segurança</h3>
                            <p>Utilizamos criptografia e boas práticas de segurança para proteger seus dados. No entanto, nenhum sistema é 100% seguro.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">5. Seus direitos</h3>
                            <p>Você pode solicitar a exclusão da sua conta e de todos os seus dados a qualquer momento, entrando em contato conosco.</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <DialogClose asChild>
                            <Button>Entendi</Button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
