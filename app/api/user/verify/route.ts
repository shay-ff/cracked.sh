import { connectToDatabase } from "@/lib/mongo";
import { User } from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { uid } = await req.json();
  if (!uid) return NextResponse.json({ error: "Missing uid" }, { status: 400 });

  await connectToDatabase();
  const user = await User.findOne({ uid });

  if (!user || !user.verifyTask || !user.verifyTask.assignedAt) {
    return NextResponse.json({ error: "No active verification task" }, { status: 400 });
  }

  const assignedAt = new Date(user.verifyTask.assignedAt).getTime();
  const now = Date.now();
  const timeDiffSeconds = (now - assignedAt) / 1000;

  if (timeDiffSeconds > 60) {
    user.verifyTask = null;
    await user.save();

    return NextResponse.json({ error: "Time expired. Please request a new verification task." }, { status: 400 });
  }

  // --- Here you'd call Codeforces API to check submission ---
  // Assuming they submitted correctly and task is verified:

  user.isVerified = true;
  user.verifyTask = null;
  await user.save();

  return NextResponse.json({ success: true });
}
