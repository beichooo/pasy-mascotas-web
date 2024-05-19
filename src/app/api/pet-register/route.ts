import { NextRequest, NextResponse } from "next/server";
import Pet from "@/models/Pet";
import User from "@/models/User";
import { connectDB } from "@/libs/mongodb";

export function GET(req: NextRequest) {
  return NextResponse.json({ message: "pet-register api ready" });
}

export async function POST(req: NextRequest) {
  try {
    connectDB();

    // Get user email and pet data from request body
    const request = await req.json();
    console.log(request);

    const userEmail = request.userEmail;
    console.log(userEmail || "there is no email");

    const user = await User.findOne({ email: userEmail });
    console.log(user || "there is no user");

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const newPet = new Pet({ ...request.pet, owner: user._id });
    await newPet.save();

    user.pets.push(newPet._id);
    await user.save();

    return NextResponse.json({ message: `Created pet` });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
