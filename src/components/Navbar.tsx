import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { UserAccountNav } from "./UserAccountNav";
import SearchBar from "./SearchBar";
import Image from "next/image";
import MobileSideMenu from "./MobileSideMenu";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <MobileSideMenu />
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="w-[160px] h-[40px]  hidden sm:block" />
          <Image
            src="/Logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="block sm:hidden"
          />
        </Link>

        {/* search bar */}
        <SearchBar />

        {/* actions */}
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link
            href="/sign-in"
            className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 sm:w-20 w-32 py-3 text-center"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
