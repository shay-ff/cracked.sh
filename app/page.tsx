import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Link from "next/link";

import { FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white font-mono">
      <Header />
      <SubHeader />
      <main className="px-6 sm:px-20 md:px-40 py-12 mt-10 overflow-x-hidden">
        <div className="text-4xl sm:text-5xl font-bold mb-6 text-white w-[22ch] overflow-hidden whitespace-nowrap font-mono animate-[typing_3s_steps(22,end)_forwards]">
          welcome to <span className="text-purple-300">cracked.sh!</span>
        </div>

        <ul className="list-disc pl-5 space-y-2 text-xl text-gray-300">
          <li>
            <Link
              href="/roadmap"
              className="text-white hover:underline hover:text-blue-400 transition-colors duration-300"
            >
              Know what to expect from cracked.sh!
            </Link>
          </li>
          <li>
            <a
              href="https://discord.gg/zJvfJFdszf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
            >
              Join the community on Discord
              <FaDiscord className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}