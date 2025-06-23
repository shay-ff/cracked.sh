import Link from "next/link";

export default function SubHeader() {
  return (
    <div className="border-t border-blue-400 px-40 pt-3 pb-1">
      <nav className="text-blue-400 text-lg space-x-4 underline underline-offset-8 decoration-2">
        <Link
          href="/problems"
          className="hover:text-white bg-transparent border-none cursor-pointer"
        >
          problems
        </Link>
        <span>|</span>
        <Link
          href="/mashups"
          className="hover:text-white bg-transparent border-none cursor-pointer"
        >
          mashups
        </Link>
        <span>|</span>
        <Link
          href="/duels"
          className="hover:text-white bg-transparent border-none cursor-pointer"
        >
          duels
        </Link>
        <span>|</span>
        <Link
          href="/roadmap"
          className="hover:text-white bg-transparent border-none cursor-pointer"
        >
          roadmap
        </Link>
      </nav>
    </div>
  );
}
