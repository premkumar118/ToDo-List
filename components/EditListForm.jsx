"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditListForm(id, title, description) {
  const [newTitle, setNewTitle] = useState(id.title);
  const [newDescription, setNewDescription] = useState(id.description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://prem-todo-list.vercel.app/api/lists/${id.id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newTitle, newDescription }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update List");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 p-2"
        type="text"
        placeholder="Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 p-2"
        type="text"
        placeholder="Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white w-fit px-5 py-2"
      >
        Edit List
      </button>
    </form>
  );
}
