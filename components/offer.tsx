import Image from "next/image";
import { CountDown } from "./countDown";

export function Offer(){
    return(
        <div className="bg-black h-screen flex flex-col md:flex-row 
        md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center 
            text-center gap-8 p-6">
                <h1 className="text-white text-5xl font-bold xl:text-6xl">
                    Delicioso hambúrguer e batata frita
                </h1>
                <p className="text-white xl:text-xl">
                    Em cada mordida, uma explosão de sabor que transforma 
                    simples momentos em experiências inesquecíveis.
                </p>
                
                <button className="bg-red-500 text-white rounded-md py-3 px-6">
                    Pedir agora
                </button>
            </div>

            {/* IMAGE CONTAINER */}
            <div className="flex-1 w-full relative md:h-full">
                <Image
                  src='/offerProduct.png'
                  alt="offer"
                  fill
                  className="object-contain"
                />
            </div>
        </div>
    )
}