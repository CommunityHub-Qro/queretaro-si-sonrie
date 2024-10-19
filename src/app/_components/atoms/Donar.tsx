import Link from "next/link";
import React from "react";
import { navbar } from "~/app/constants";

const DonateLink = navbar.filter((it) => it.name === "Donar")[0];

const Donar = () => {
  return (
    <Link
      className="h-full w-32 items-center rounded-full bg-third py-2 text-center text-white drop-shadow-md hover:bg-[rgb(255,40,40)]"
      href={DonateLink?.href ?? "/"}
    >
      {DonateLink?.name}
    </Link>
  );
};

export default Donar;
