import Link from "next/link";
import { Menu } from "./menu";
import { CartIcon } from "./cart-icon";
import Image from "next/image";
import { UserLinks } from "./user-links";

export function Navbar(){
  const user = false

  return(
      <div className="h-12 flex items-center justify-between p-4
      border-b-2 border-red-500 uppercase text-red-500 md:h-24
      lg:px-20 xl:px-40">

        {/* lEFT LINKS*/}
        <div className="hidden md:flex gap-4 flex-1">
          <Link href='/'>Início</Link>
          <Link href='/menu'>Menu</Link>
          <Link href='/'>Contato</Link>
        </div>

        <div className="text-xl md:font-bold flex-1 md:text-center">
          <Link href='/'>Restaurant</Link>
        </div>

        <div className="md:hidden">
          <Menu/>
        </div>

        {/* RIGTH LINKS*/}
        <div className="hidden md:flex gap-4 item-center justify-end flex-1">
          <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer 
          bg-orange-300 px-1 rounded-md">
            <Image src='/phone.png' alt="phone" width={20} height={20}/>
            <span>123 456 78</span>
          </div>        
          <UserLinks/>
          <CartIcon/>
        </div>
      </div>
  )
}