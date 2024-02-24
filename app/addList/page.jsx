"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddList () {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const router = useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!title || !description) {
            alert("Title and Description Required.")
            return;
        }

        try {
            const res = await fetch("/api/lists", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body:JSON.stringify({ title, description }),
            })

            if (res.ok) {
                router.push("/")
                router.refresh()
            } else {
                throw new Error("Failed to Fetch the List")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
                onChange={ (e) => setTitle(e.target.value) }
                value={title}
                className="border border-slate-500 p-2"
                type="text"
                placeholder="Title"
            />

            <input
                onChange={ (e) => setDescription(e.target.value) }
                value={description}
                className="border border-slate-500 p-2"
                type="text"
                placeholder="Description"
            />

            <button type="submit" className="bg-green-600 font-bold text-white w-fit px-5 py-2">Add List</button>
        </form>
    )
}