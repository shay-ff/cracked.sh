"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hook/useAuth";

export default function ProblemsPage() {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) return;
    if (!user) {
      router.push("/signin");
    }
  }, [user, router]);

  if (user === null || !user) {
    return (
      <div className="text-white font-mono px-4 mt-10">
        <p>
          Kindly Wait! If you see this message you are either not logged in or there is an issue with the authentication service.
        </p>
        <p>Please try again later or contact support if the issue persists.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-white text-2xl font-bold mb-4">Introductory Problems</h1>
      
    </div>
  );
}
