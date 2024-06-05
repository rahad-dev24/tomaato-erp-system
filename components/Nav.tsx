import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";
const Nav = () => {
  return (
    <nav className={cn(" border border-b-white bg-[#ffe6ec] px-4")}>
      <ul className={cn("flex items-center gap-4")}>
        <li className="mr-auto">
          <Link
            href={"/"}
            className={cn("flex items-center  divide-x-2 divide-red-300 gap-2")}
          >
            <Image
              src={"/tomaato.svg"}
              alt="Tomaato logo"
              width={"48"}
              height={"48"}
            />
            <p className="pl-2 dark:text-black">Tomaato Systems</p>{" "}
          </Link>
        </li>
        <li>
          <Link href={"/login"}>
            <Button
              variant={"default"}
              className={cn(
                "hover:bg-[#007fff] text-black bg-white hover:text-white",
              )}
            >
              Login
            </Button>
          </Link>
        </li>
        <li>
          <Link href={"/logout"}>
            <Button variant={"destructive"}>Logout</Button>
          </Link>
        </li>
        <ModeToggle />
      </ul>
    </nav>
  );
};

export default Nav;
