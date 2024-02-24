import connectMongoDB from "@/libs/mongodb"
import List from "@/models/list"
import { NextResponse } from "next/server"

export async function PUT(request, {params}) {
    const { id } = params
    const {newTitle: title, newDescription: description} = await request.json()
    await connectMongoDB()
    await List.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message: "Updated"}, { status: 200 })
}

export async function GET(request, {params}) {
    const { id } = params
    await connectMongoDB()
    const list = await List.findOne({_id: id})
    return NextResponse.json({ list }, { status: 200 })
}
