import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import User from "@/models/User";

export async function GET() {
  connectDB();
  const users = await User.find();

  return NextResponse.json(users);
}
