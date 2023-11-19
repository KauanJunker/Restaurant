import { NextResponse } from "next/server"

export const GET = () => {
  return new NextResponse('peitinhos de julia', {status: 200})
}