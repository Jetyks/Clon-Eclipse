import Image from "next/image";
import eclipseImg from "../../public/images/blue-eclipse.jpg";


export const AppShowcase = () => {
  return (
    <section className="w-full flex justify-center">
        <div className="w-full mx-30 position-r">
            <Image
                className="rounded-2xl shadow-[0_0_800px_#01519b]"
                src={eclipseImg}
                alt="Eclipse app showcase">
             </Image>
             {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.6)_0%,_transparent_70%)] blur-3xl"></div> */}
        </div>
    </section>
  )
}
