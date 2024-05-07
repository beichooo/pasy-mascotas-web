import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/libs/mongodb";

export function GET(req: NextRequest) {
  return NextResponse.json({ message: "user api ready" });
}

export async function POST(req: NextRequest) {
  try {
    connectDB();
    const data = await req.json();

    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return NextResponse.json(
        { message: `User already exists` },
        { status: 400 }
      );
    }
    const newUser = new User(data);
    const saveUser = await newUser.save();
    console.log(saveUser);
    return NextResponse.json({ message: `User created` });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
