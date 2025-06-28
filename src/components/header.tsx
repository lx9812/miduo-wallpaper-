"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="absolute top-0 left-0 w-full  z-10">
      <div className="flex flex-row items-center justify-between  py-12 container mx-auto">
        <Link href="/" className="text-3xl font-bold text-white">
          Home
        </Link>
        <div className="text-xl text-white space-x-4 font-bold" >
          <Link href="/about" className={pathname === "/about" ? "text-purple-900" : "text-white"}>About</Link>
          <Link href="/contact" className={pathname === "/contact" ? "text-purple-900" : "text-white"}>Contact</Link>
        </div>
      </div>
    </div> 
  );
}
