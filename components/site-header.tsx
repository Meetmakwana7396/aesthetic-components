import Link from "next/link";
import React from "react";

const SiteHeader = () => {
  return (
    <nav className="h-[160px] flex items-center container text-white">
      <div className="flex justify-between w-full">
        <div className="flex items-center justify-between">
          <Link className=" text-4xl font-bold  tracking-wide" href="#">
            Bro Codes.
          </Link>
        </div>

        {/* <!-- Mobile menu --> */}
        <div className="hidden md:flex md:items-center">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Link
              className=" text-2xl font-medium hover: md:mx-4 md:my-0"
              href="#"
            >
              Home
            </Link>
            <Link
              className=" text-2xl font-medium hover: md:mx-4 md:my-0"
              href="#"
            >
              About
            </Link>
            <Link
              className=" text-2xl font-medium hover: md:mx-4 md:my-0"
              href="#"
            >
              Services
            </Link>
            <Link
              className=" text-2xl font-medium hover: md:mx-4 md:my-0"
              href="#"
            >
              Contact
            </Link>
            <Link href={"#"} className="rounded-full text-xl bg-white p-3 px-8 text-black">
              Explore components
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
