import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getData = async() => {
    try {
        const data = await fetch ('http://localhost:3000/api/lists', {
        cache: "no-store",
        })

        if (!data.ok) {
            throw new Error("Failed to fetch data")
        }

        return data.json()
    } catch (error) {
        console.log("Error : ", error);
    }
}

export default async function ToDoLists() {

    const { lists } = await getData()


    return (
        <>
            {lists.map(list => (
                <div key={list._id} className="flex justify-between border border-slate-950 px-5 py-3 items-start my-5 gap-5">
                    <div>
                        <h2 className="font-bold text-xl">{list.title}</h2>
                        <span>{list.description}</span>
                    </div>

                    <div className="flex gap-2">
                        <RemoveBtn id={list._id} />
                        <Link href={`/editList/${list._id}`}>
                            <HiPencilAlt size={20} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}