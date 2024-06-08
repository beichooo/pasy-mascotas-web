import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = req.json();
  console.log(data);

  return NextResponse.json({ message: req.body });
}
