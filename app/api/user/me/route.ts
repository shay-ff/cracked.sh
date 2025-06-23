import { connectToDatabase } from "@/lib/mongo";
import { User } from "@/model/user";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const uid = req.headers.get("x-uid");
  if (!uid) return NextResponse.json({ error: "No UID provided" }, { status: 400 });

  await connectToDatabase();
  const user = await User.findOne({ uid });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}
