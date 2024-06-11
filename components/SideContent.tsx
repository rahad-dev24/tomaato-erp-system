import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
const contentList = [
  "Customer",
  "Product",
  "Sales",
  "Revenue",
  "Inventory",
  "Store",
  "Employee",
  "Manager",
  "Admin",
];
const SideContent = () => {
  return (
    <article className={cn("flex flex-col gap-4 items-center w-full p-5")}>
      {contentList.map((i) => (
        <Link href={`/${i}`} className={cn("w-full text-center")} key={i}>
          <Button
            variant={"secondary"}
            className={cn("w-full hover:bg-white hover:text-black")}
          >
            {i}
          </Button>
        </Link>
      ))}
    </article>
  );
};

export default SideContent;
