import Link from 'next/link'
import React from 'react'
import {FaInstagram, FaWhatsapp } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='w-full h-32'>
        <div className='w-full h-full bg-red-logo flex'>
          <div className='w-1/2 flex justify-center items-center'>
            <p className='text-white text-2xl'>Mis redes sociales</p>
          </div>
          <div className='w-1/2 flex justify-between items-center pr-6'>
            <a href="mailto:milagros.y.medina@gmail.com">
              <button className='p-2 rounded-full bg-white'>
                <SiGmail  size={20}/>
              </button>
            </a>
            <Link href="https://twitter.com/milo906">
              <button className='p-2 rounded-full bg-white'>
                <Image src="/icons/x-twitter.svg" alt='twitter-icon' width={20} height={20}></Image>
              </button>
            </Link>
            <Link href="https://www.instagram.com/empresariaymama/">
              <button className='p-2 rounded-full bg-white'>
                <FaInstagram size={20}/>
              </button>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=584142472314">
              <button className='p-2 rounded-full bg-white'>
                <FaWhatsapp size={20}/>
              </button>
            </Link>
          </div>
        </div>
    </footer>
  )
}