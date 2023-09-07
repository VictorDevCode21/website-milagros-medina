import { AiOutlineMenu } from "react-icons/ai";
import {useState} from 'react'
import Link from "next/link";

export default function HeaderHome() {

    return (
        <header className="w-full h-screen">
            <div className="w-full h-1/6 flex justify-evenly pt-8">
                <Link href="/aboutMe"><h2 className="font-bold font-serif" title="Conoce más acerca de Milagros Medina">Sobre mi</h2></Link>
                <Link href="/advices"><h2 className="font-bold font-serif" title="Mis mejores consejos como mamá y empresaria">Consejos de mamá</h2></Link>
                <Link href="/products"><h2 className="font-bold font-serif" title="Los mejores productos para ti">Productos</h2></Link>
                <Link href="/workShops"><h2 className="font-bold font-serif" title="Conoce mis talleres">Talleres</h2></Link>
                <Link href="/book"><h2 className="font-bold font-serif" title="Descubre mi libro">Mi libro</h2></Link>
            </div>
            <div className="w-full h-5/6 flex flex-col justify-center items-center">
                <h1 className="font-serif font-bold text-5xl text-center pb-6">Milagros Medina</h1>
                <h2 className="font-serif font-normal leading-6 text-center pb-6">Mujer empoderada, madre de 5 hijos y empresaria nata, perteneciente a la Generación X. Arriesgada, entusiasta, tecnológica, asesora y experta en su profesión y todo lo que hace.</h2>
                <div>
                    <button className="border-r border-t border-b border-l border-gray-600 px-4">Redes sociales</button>
                </div>
            </div>
        </header>
    )
}