"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/hook/useAuth";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

type Task = {
  contestId: number;
  index: string;
  url: string;
};

export default function SetUsernamePage() {
  const user = useAuth();
  const [handle, setHandle] = useState("");
  const [task, setTask] = useState<Task | null>(null);
  const [verdict, setVerdict] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerStarted, setTimerStarted] = useState(false);
  const router = useRouter();

  const assignTask = async () => {
    const res = await fetch("/api/user/set", {
      method: "POST",
      body: JSON.stringify({ uid: user?.uid, handle }),
    });
    const data = await res.json();
    setTask(data);
    setVerdict(null);
    setTimeLeft(60);
    setTimerStarted(true);
  };

  useEffect(() => {
    if (!timerStarted || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setVerdict("❌ Time expired. Please try again.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerStarted, timeLeft]);

  const verifySubmission = async () => {
    const res = await fetch(
      `https://codeforces.com/api/user.status?handle=${handle}&count=10`
    );
    const { result } = await res.json();

    const match = result.find(
      (sub: any) =>
        sub.verdict === "COMPILATION_ERROR" &&
        sub.problem.contestId === task?.contestId &&
        sub.problem.index === task?.index
    );

    if (match) {
      await fetch("/api/user/verify", {
        method: "POST",
        body: JSON.stringify({ uid: user?.uid }),
      });
      router.push("/mashups");
    } else {
      setVerdict("❌ Couldn't find a valid compilation error submission.");
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-blue-400 min-h-screen font-mono">
      <Header />
      <SubHeader />

      <main className="mt-8 px-40">
        <p className="text-lg mb-4 underline underline-offset-8 decoration-1 decoration-white">
          Enter your Codeforces Handle :
        </p>
        <div className="flex gap-2 mb-6">
          <form className="flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              assignTask();
            }}
          >
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="e.g., tourist"
              className="bg-black border border-blue-400 px-3 py-1 text-white placeholder:text-blue-300 rounded w-64"
            />
            <button
              onClick={assignTask}
              className="border border-blue-400 text-blue-300 py-1 hover:bg-white hover:text-black px-4 rounded transition-all"
            >
              [ submit ]
            </button>
          </form>
        </div>

        {task && (
          <div className="space-y-4 mt-4">
            <p>
              Problem:{" "}
              <a
                href={task.url}
                target="_blank"
                className="underline text-blue-300 hover:text-white"
              >
                {task.url}
              </a>
            </p>

            <p>
              Timer: <span className="text-yellow-300">{timeLeft} seconds</span>
            </p>

            <button
              onClick={verifySubmission}
              disabled={timeLeft <= 0}
              className={`border ${
                timeLeft <= 0
                  ? "border-gray-500 text-gray-500 cursor-not-allowed"
                  : "border-green-400 text-green-300 hover:bg-green-400 hover:text-black"
              } px-4 py-1 rounded transition-all`}
            >
              [ check ]
            </button>

            {verdict && <p className="mt-2">{verdict}</p>}
          </div>
        )}
      </main>
    </div>
  );
}
