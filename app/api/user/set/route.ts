import { connectToDatabase } from "@/lib/mongo";
import { User } from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { uid, handle } = await req.json();
    // console.log("Setting user handle:", { uid, handle });
    if (!uid || !handle)
      return NextResponse.json(
        { error: "Missing uid/handle" },
        { status: 400 }
      );

    await connectToDatabase();

    const cfRes = await fetch("https://codeforces.com/api/problemset.problems");
    const { result } = await cfRes.json();

    const pool = result.problems.filter(
      (p: any) => p.rating >= 800 && p.rating <= 1000 && p.contestId && p.index
    );

    const problem = pool[Math.floor(Math.random() * pool.length)];

    await User.findOneAndUpdate(
      { uid },
      {
        uid,
        codeforcesHandle: handle,
        isVerified: false,
        verifyTask: {
          contestId: problem.contestId,
          index: problem.index,
          assignedAt: new Date(),
        },
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({
      contestId: problem.contestId,
      index: problem.index,
      url: `https://codeforces.com/contest/${problem.contestId}/problem/${problem.index}`,
    });
  } catch (err) {
    console.error("Error in POST /api/user/set:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
