"use client"
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { GithubIcons } from "./icons";
import { useRouter } from "next/navigation";

export function SiteHeader() {
  const router = useRouter()
  return (
    <header className="sticky top-0 z-50 w-full" role="button" onClick={()=>router.push('/')}>
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h4 className="font-bold text-2xl">aesthetic components</h4>
            <nav className="ml-6 flex gap-10 text-neutral-600">
              {/* <Link href={"#"}>Hii</Link>
              <Link href={"#"}>Hii</Link>
              <Link href={"#"}>Hii</Link> */}
            </nav>
          </div>
          <div className="flex items-center">
            Search bar comes here
            <div className="flex gap-2 ml-4 text-neutral-500">
              <Link
                href={"#"}
                className={cn(buttonVariants({ variant: "ghost" }), "px-2")}
              >
                <GithubIcons />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
