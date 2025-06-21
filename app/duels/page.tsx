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
      <>
        <p className="text-white font-mono">
          Kindly Wait! If you see this message you are either not logged in or there is an issue with the authentication service.
        </p>
        <p className="text-white font-mono">
          Please try again later or contact support if the issue persists.
        </p>
      </>
    );
  }

  return (
    <div className="text-white font-mono w-[22ch] overflow-hidden whitespace-nowrap border-r-2 border-white animate-[typing_3s_steps(22,end)_forwards,blink_0.7s_step-end_infinite]">
      welcome to cracked.sh!
    </div>
  );
}
