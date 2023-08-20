import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import React from "react";
import SignInButton from "../button/SigninButton";
import AccountNavbar from "./AccountNavbar";
import ThemeToggle from "../theme/ThemeToggle";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  console.log(session?.user);
  //   if (session) {
  //     return <pre>{JSON.stringify(session.user, null, 2)}</pre>;
  //   } else {
  //     return <h2>Not sign in</h2>;
  //   }

  return (
    <div className="fixed inset-x-0 top-0 z-10 h-fit border-b border-zinc-300 bg-white py-2 dark:bg-gray-950">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <p
            className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold 
                        transition-all hover:-translate-y-[2px] dark:border-white md:block"
          >
            LongQuiz
          </p>
        </Link>
        <div className="flex items-center ">
          <ThemeToggle className="mr-3" />
          <div className="flex items-center">
            {session?.user ? (
              <AccountNavbar user={session?.user} />
            ) : (
              <SignInButton text="Sign In" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
