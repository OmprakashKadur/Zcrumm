import {
  SignUpButton,
  SignedOut,
  SignInButton,
  SignedIn,

} from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Link from "next/link";
import { PenBox } from "lucide-react";
import { Button } from "./ui/button";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            <Image
              width={200}
              height={56}
              src="/logo2.png"
              alt="Zscrum Logo"
              className="h-10 w-auto object-contain"
            />
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/project/create">
            <Button variant="destructive" className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Create Project</span>
            </Button>
          </Link>
          <ModeToggle />
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserMenu/>
          </SignedIn>
        </div>
      </nav>
         {/* <UserLoading /> */}
    </header>
  );
};

export default Header;
