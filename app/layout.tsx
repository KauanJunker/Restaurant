
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Notification } from '@/components/notification'
import { AuthProvider } from '@/components/auth-provider'
import { QueryProvider } from '@/components/query-provider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


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
          <QueryProvider>
            <div>
              <Notification/>
              <Navbar/>
              {children}
              <Footer/> 
              <ToastContainer position='bottom-right' theme='dark' 
              autoClose={3000}/>
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
