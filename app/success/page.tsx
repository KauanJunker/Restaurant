'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function SuccessPage( ){
    const searchParams = useSearchParams()
    const payment_intent = searchParams.get("payment_intent")
    const router = useRouter()

    useEffect(() => {
        const makeRequest = async () => {
            try {
              await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
                method: "PUT",
              })
               router.push("/orders")
            }catch(err) {
              console.log(err)
            }
        }
        makeRequest()

    },[payment_intent, router])

    return(
        <div className=" p-4 lg:px-40 lg:py-10 w-full flex items-start justify-center text-2xl h-screen">
            Pagamento bem-sucedido. Você está sendo redirecionado para a página de pedidos. 
            Por favor, não feche a página..
        </div>
    )
}