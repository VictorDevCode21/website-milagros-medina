import Image from "next/image"

export default function SidePhoto() {
    return (
        <aside className="w-2/5 h-screen sticky left-0"> 
            <div className="absolute top-0 left-6">
                <Image className="w-40 h-24" src="/Logo/logo-mili.png" alt="MM-Logo" width={1080} height={720} />
            </div>
            <Image className="w-full h-full" src="/Photos/Mili-photo-example.JPG" alt="Mili" width={1080} height={720} />
        </aside>
    )
}