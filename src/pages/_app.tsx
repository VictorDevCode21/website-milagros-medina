import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SidePhoto from '@/components/sidePhoto'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <div className=' flex sticky left-0 top-0'>
        <SidePhoto />
        <div className='w-3/5 overflow-y-scroll h-screen'>
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </main>
    )
}
