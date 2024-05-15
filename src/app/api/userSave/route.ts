import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/libs/mongodb";

export function GET(req: NextRequest) {
  return NextResponse.json({ message: "user api ready" });
}

export async function POST(req: NextRequest) {
  try {
    connectDB();
  } catch (error) {
    console.error("Database connection failed:", error);
    return NextResponse.json(
      { message: "Database connection failed" },
      { status: 500 }
    );
  }

  try {
    const data = await req.json();
    console.log(data);

    const existingUser = await User.findOne({ email: data.email });

    if (existingUser) {
      console.log("User already exists 1");
      return NextResponse.json({ message: `User already exists` });
    }

    const newUser = new User(data);
    const saveUser = await newUser.save();
    return NextResponse.json({ message: `User created` });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
