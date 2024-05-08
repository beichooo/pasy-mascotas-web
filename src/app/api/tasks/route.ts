import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ message: "Getting tasks" });
}

export function POST() {
  return NextResponse.json({ message: "Creating a task" });
}
