import { NextRequest, NextResponse } from "next/server";
import Pet from "@/models/Pet";
import User from "@/models/User";
import { connectDB } from "@/libs/mongodb";
import mongoose from "mongoose";

export function GET(req: NextRequest) {
  return NextResponse.json({ message: "pet-register api ready" });
}

export async function POST(req: NextRequest) {
  try {
    connectDB();

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

// this can be the update function for a new pet

// export async function PUT(req: NextRequest) {
//   try {
//     connectDB();

//     // Get pet id and new data from request body
//     const request = await req.json();
//     const petId = request.petId;
//     const newData = request.newData;

//     // Validate petId is a valid ObjectId
//     if (!mongoose.Types.ObjectId.isValid(petId)) {
//       return NextResponse.json({ message: "Invalid pet id" }, { status: 400 });
//     }

//     // Validate newData is an object
//     if (typeof newData !== 'object' || newData === null) {
//       return NextResponse.json({ message: "Invalid new data" }, { status: 400 });
//     }

//     // Find the pet by id and update it
//     const pet = await Pet.findOneAndUpdate({ _id: petId }, newData, { new: true });

//     if (!pet) {
//       return NextResponse.json({ message: "Pet not found" }, { status: 404 });
//     }

//     return NextResponse.json({ message: `Updated pet`, pet });
//   } catch (error) {
//     return NextResponse.json({ message: error }, { status: 400 });
//   }
// }
