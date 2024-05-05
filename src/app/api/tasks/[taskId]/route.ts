import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";

export function GET(
  req: NextRequest,
  { params }: { params: { taskId: string } }
) {
  console.log(params);

  return NextResponse.json({ message: `Get task ${params.taskId}` });
}

export async function POST(req: NextRequest) {
  try {
    connectDB();
    const data = await req.json();
    const newUser = new User(data);
    const saveUser = await newUser.save();
    console.log(saveUser);

    return NextResponse.json({ message: `Created task` });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export function DELETE(
  req: NextRequest,
  { params }: { params: { taskId: string } }
) {
  console.log(params);

  return NextResponse.json({ message: `Delete task ${params.taskId}` });
}
