import { MenuType } from "@/types/types";
import Link from "next/link";


const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}
export default async function MenuPage(){

  const menu:MenuType = await getData()
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] 
    md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-80 relative"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2 `}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="hidden lg:block text-sm my-8">{category.desc}</p>
          </div>
            <button className={`hidden 2xl:block bg-black p-3 rounded-md
            text-white absolute bottom-2`}
            >
              Explore
            </button>
        </Link>
      ))}
    </div>
  );
};