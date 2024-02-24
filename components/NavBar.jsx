import Link from "next/link"

export default function NavBar() {
    return(
        <nav className="flex justify-between items-center bg-black p-6">
            <Link className="text-white font-bold" href={'/'}>Prem&apos;s ToDo-List</Link>
            <Link className="bg-green-400 px-5 py-2 text-white font-semibold" href={'/addList'}>Add List</Link>
        </nav>
    )
}