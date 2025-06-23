"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hook/useAuth";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

export default function MashupPage() {
  const user = useAuth();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkUserStatus = async () => {
      if (user === null) {
        return (
          <>
            <p className="text-white font-mono">
              Kindly Wait! If you see this message you are either not logged in
              or there is an issue with the authentication service.
            </p>
            <p className="text-white font-mono">
              Please try again later or contact support if the issue persists.
            </p>
          </>
        );
      }
      if (!user) {
        router.push("/signin");
        return;
      }

      try {
        const res = await fetch("/api/user/me", {
          method: "GET",
          headers: {
            "x-uid": user.uid,
          },
        });

        if (res.status === 404) {
          router.push("/set-username");
          return;
        }

        const data = await res.json();
        if (!data.isVerified) {
          router.push("/set-username");
        } else {
          setChecking(false);
        }
      } catch (err) {
        console.error("Error checking verification", err);
        router.push("/set-username");
      }
    };

    checkUserStatus();
  }, [user, router]);

  if (checking || user === null || !user) {
    return (
      <div className="text-white font-mono text-xl">
        <Header />
        <SubHeader />
        <br />
        Kindly Wait! If you see this message you are either not logged in or
        there is an issue with the authentication service.
      </div>
    );
  }

  return (
    <div className="text-white font-mono text-xl">
      <Header />
      <SubHeader />
      <span className="px-40 pt-15">✅ Verified. Welcome to the mashup!</span>
    </div>
  );
}
