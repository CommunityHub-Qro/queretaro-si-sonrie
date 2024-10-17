import Link from "next/link";
import React from "react";

const Donar = () => {
  return (
    <Link
      className="bg-specialRed h-full w-32 items-center rounded-full py-2 text-center drop-shadow-md hover:bg-[rgb(255,40,40)]"
      href={"/donations-page"}
    >
      Donar
    </Link>
  );
};

export default Donar;
