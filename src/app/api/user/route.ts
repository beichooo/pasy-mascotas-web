import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, name } = await request.json();
  await connectMongoDb();
  await User.create({ name, email });
  return NextResponse.json({ message: "User created" }, { status: 201 });
}
