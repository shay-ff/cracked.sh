import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      <header className="bg-gray-100 text-black flex items-center justify-between p-4 rounded-full shadow-md w-11/12 mx-auto mt-4">
        <h1 className="text-xl font-extrabold tracking-wide">cracked.sh</h1>
        <div className="flex space-x-4">
          <Link
            href="/login"
            className="px-5 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 bg-gray-200 text-black rounded-full shadow-md hover:bg-gray-300 transition"
          >
            Signup
          </Link>
        </div>
      </header>
      <main className="flex justify-center flex-wrap gap-8 p-10">
        <Link
          className="text-white flex items-center justify-center w-64 h-64 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl text-xl font-semibold shadow-lg hover:scale-105 transform transition"
          href="./LandingPage/newbs"
        >
          Newbs
        </Link>
        <Link
          className="text-white flex items-center justify-center w-64 h-64 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl text-xl font-semibold shadow-lg hover:scale-105 transform transition"
          href="./LandingPage/gettingThere"
        >
          Getting There
        </Link>
        <Link
          className="text-white flex items-center justify-center w-64 h-64 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl text-xl font-semibold shadow-lg hover:scale-105 transform transition"
          href="./LandingPage/almostGotit"
        >
          Almost Got It
        </Link>
      </main>
    </div>
  );
}
