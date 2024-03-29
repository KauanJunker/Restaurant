'use client'

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

export function UserLinks(){
    const {status} = useSession()

    return(
        <div>
          {status === 'authenticated' ? (
            <div>
              <Link href='/orders'>Ordens</Link>
              <span className="ml-4 cursor-pointer" onClick={() => signOut()}>Sair</span>
            </div>
            ) : (
            <Link href='/login'>Entrar</Link>
          )}
        </div>
    )
}