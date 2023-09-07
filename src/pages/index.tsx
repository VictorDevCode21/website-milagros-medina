import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderHome from '@/components/Home/headerHome'
import Mamá from '@/components/Home/mommy'
import Business from '@/components/Home/business'
import Tips from '@/components/Home/tips'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <HeaderHome/>
      <Mamá/>
      <Business/>
      <Tips />
    </main>
  )
}
