"use client"

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({id}) {

    const router = useRouter()

    const handleDelete = async() => {
        const confirmed = confirm("Are you Sure ?")
        if(confirmed){
            const res = await fetch(`http://localhost:3000/api/lists?id=${id}`, {
                method:"DELETE"
            })

            if (res.ok) {
                router.refresh()
            }
        }
    }

    return (
        <button onClick={handleDelete} className="text-red-400">
            <HiOutlineTrash size={20} />
        </button>
    )
}