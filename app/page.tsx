import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="text-center space-y-6 px-40 py-20">
        <h1 className="font-extrabold text-6xl">
          aesthetic components for free
        </h1>
        <p className="text-2xl text-neutral-500 px-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit natus ullam qui quas beatae fuga incidunt repellat
          nesciunt, quasi quod!
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button size={"xl"}>Get started</Button>
          <Button size={"xl"} variant={"outline"}>
            Explore components
          </Button>
        </div>
      </div>
      <div>
        <h1 className="font-extrabold text-4xl">Components</h1>{" "}
        <div className="grid grid-cols-3 my-6">
          <Link
            href="/components/navbar"
            className="h-60 aspect-video bg-white rounded-xl flex justify-center items-center hover:ring-4 ring-amber-800"
          >
            <span className="text-4xl font-semibold">Navbar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
