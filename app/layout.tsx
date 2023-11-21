
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Notification } from '@/components/notification'
import { AuthProvider } from '@/components/auth-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Junker Restaurant',
  description: 'Melhor comida do Brasil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${inter.className}`}>
       <AuthProvider>
          <div>
            <Notification/>
            <Navbar/>
            {children}
            <Footer/> 
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
