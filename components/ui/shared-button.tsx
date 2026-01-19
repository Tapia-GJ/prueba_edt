import { Facebook } from "lucide-react"
import Link from "next/link"

export default function ShareButton({ idRestaurant = "" }) {
    const link = encodeURI(`https://tapia-gj.github.io/prueba_edt/restaurants/${idRestaurant}`)
    return (
        <Link
            className=" flex gap-2 mt-6 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 justify-center items-center"
            href={`https://www.facebook.com/share.php?u=${link}`}
            target="_blank" rel="noreferrer">
            <Facebook size={20}></Facebook> Share on Facebook
        </Link>
    )
}
