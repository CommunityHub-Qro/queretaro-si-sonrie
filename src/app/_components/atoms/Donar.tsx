import Link from "next/link";
import React from "react";
import { navbar } from "~/app/constants";

const Donar = () => {
  return (
    <Link
      className="h-full w-32 items-center rounded-full bg-third py-2 text-center drop-shadow-md hover:bg-[rgb(255,40,40)]"
      href={navbar[4]?.href ?? "/"}
    >
      {navbar[4]?.name}
    </Link>
  );
};

export default Donar;
