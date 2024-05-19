import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";

export async function GET(
  request: NextRequest,
  { params }: { params: { taskId: string } }
) {
  connectDB();
  const taskFound = await User.findOne({ _id: params.taskId });
  return NextResponse.json(taskFound);
}

export async function POST(req: NextRequest) {
  try {
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
