import EditListForm from "@/components/EditListForm";

const getListById = async (id) => {
  try {
    const res = await fetch(
      `https://prem-todo-list.vercel.app/api/lists/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch List");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditList({ params }) {
  const { id } = params;
  const { list } = await getListById(id);
  const { title, description } = list;

  return (
    <div>
      <EditListForm id={id} title={title} description={description} />
    </div>
  );
}
