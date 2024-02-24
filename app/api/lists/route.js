import connectMongoDB from "@/libs/mongodb"
import List from "@/models/list"
import { NextResponse } from "next/server"

export async function POST(request) {
    const {title,description} = await request.json()
    await connectMongoDB()
    await List.create({title,description})
    return NextResponse.json({message:"List Created"}, {status: 201})
}

export async function GET() {
    await connectMongoDB()
    const lists = await List.find()
    return NextResponse.json({ lists })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await List.findByIdAndDelete(id)
    return NextResponse.json({message: "List Deleted"}, {status: 200})
}