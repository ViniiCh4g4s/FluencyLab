import {HeroSection} from "@/app/_components/home/hero-section"
import {DemoCard} from "@/app/_components/home/demo-card"
import {CtaButtons} from "@/app/_components/home/cta-buttons"
import {TermsFooter} from "@/app/_components/home/terms-dialog"

export default function FluencyLabHome() {
    return (
        <div className="min-h-screen w-full bg-blue-100 flex flex-col">

            <HeroSection />

            <div className="flex-1 w-full max-w-2xl mx-auto flex flex-col
                            px-4 sm:px-8 md:px-0
                            pb-6 sm:pb-10">

                <DemoCard />

                <div className="shrink-0 h-px my-4 sm:my-5 bg-linear-to-r from-transparent via-blue-200 to-transparent" />

                <CtaButtons />

                <TermsFooter />

            </div>
        </div>
    )
}
