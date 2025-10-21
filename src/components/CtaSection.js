import Image from "next/image"
import { CTAButton } from "./CTAButton"
import bgSquares from "../../public/images/bg-cuadros.webp"

export const CtaSection = () => {
  return (
    <section className="relative default-white w-full flex flex-col items-center justify-center text-center space-y-2 mt-26 overflow-hidden py-30 opacity-90">
        {/* 1. Gradiente/Halo (z-0 o z-10) */}
    {/* <div 
        className="absolute inset-0 z-0 
                   bg-[radial-gradient(circle_at_center,rgba(55,45,200,0.7)_0%,transparent_80%)]"
    >
    </div> */}
        <Image className="absolute z-10" src={bgSquares} alt="bg-squares"></Image>
        <div className="z-20">
            <h3 className="title-2 mb-2">Build a head start to your finances</h3>
            <p className="opacity-80">Eclipse is the perfect answer! Our platform enables you to create wealth, manage <br/> your expenses, stay up to date with the latest financial news, and get ready for <br/> upcoming tax season.</p>
            <div className="mt-5"><CTAButton colorBlue = {true}>Start now</CTAButton></div>
        </div>
    </section>
  )
}
