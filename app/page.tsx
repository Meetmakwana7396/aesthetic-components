import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <SiteHeader />
      <div className="my-20 container">
        <div className="text-center space-y-6 px-40">
          <h1 className="font-extrabold text-5xl">
            World class aesthetic components for free
          </h1>
          <p className="text-xl text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit natus ullam qui quas beatae fuga incidunt repellat
            nesciunt, quasi quod!
          </p>
          <div className="flex justify-center gap-4">
            <Button>Get started</Button>
            <Button variant={"outline"}>View components</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
