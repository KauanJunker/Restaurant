import { ProductType } from "@/types/types";
import Image from "next/image";
import { FeaturedItem } from "./featured-item";

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/products', {
      cache:"no-store"
    })
  
    if(!res.ok) {
      throw new Error('failed!')
    }
  
    return res.json()
  }

export async function Featured(){
    
    const featuredProducts:ProductType[] = await getData()

    return(
        <div className="w-screen overflow-x-scroll text-red-500">
            {/* WRAPPER */}
            <div className="w-max flex">
                {/* SINGLE ITEMS*/}
                {featuredProducts.map((item) => (
                    <FeaturedItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}