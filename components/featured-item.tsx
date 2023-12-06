'use client'

import { ProductType } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FeaturedItemProps {
  item: ProductType
}

export function FeaturedItem({ item } : FeaturedItemProps){

  const router = useRouter()

    return(
      <div 
      key={item.id} 
      onClick={() => router.push(`/product/${item.id}`)}
      className="w-screen h-[60vh] flex flex-col item-center 
      justify-around p-4 hover:bg-fuchsia-50 transition-all
      duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] cursor-pointer" >

        {/* IMAGE CONTAINER */}
        {item.img && (
            <div className="relative flex-1 w-full hover:rotate-[60deg] 
            transition-all duration-500">
            <Image
            src={item.img}
            alt=""
            fill
            className="object-contain"
            />
        </div>
        )}

        {/* TEXT CONTAINER */}
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
            <p className="p-4 2xl:p-8">d{item.desc}</p>
            <span className="text-xl font-bold">{item.price}</span>
            <button 
              className="bg-red-500 text-white p-2 rounded-md"
              onClick={() => router.push(`/product/${item.id}`)}
            >
              Adicionar
            </button>
        </div>

    </div>
    )
}