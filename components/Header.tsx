"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [user, setUser] = useState<null | { name: string | null }>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="bg-[#0d0d0d] py-4">
      <div className="border-2 border-blue-400 rounded-3xl px-6 py-3 mx-auto max-w-6xl flex items-center justify-between">
        <button
          onClick={() => (window.location.href = "/")}
          className="text-blue-400 text-xl font-mono tracking-wider focus:outline-none"
        >
          &lt; <span className="font-semibold">cracked</span>.
          <span className="font-semibold">sh</span> &gt;
        </button>

        {user ? (
          <div className="text-blue-400 font-mono space-x-4 text-lg flex items-center">
            <span className="italic text-white hover:underline">Hello, {user.name ?? "User"}</span>
            <button
              onClick={handleLogout}
              className="hover:underline focus:outline-none"
            >
              logout
            </button>
          </div>
        ) : (
          <div className="text-blue-400 font-mono space-x-2 text-lg">
            <Link href="/signin" className="hover:underline">
              sign in
            </Link>
            
          </div>
        )}
      </div>
    </header>
  );
}