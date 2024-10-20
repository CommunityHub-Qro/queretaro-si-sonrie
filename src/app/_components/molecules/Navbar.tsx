"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbar } from "../../constants";
import { useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer";
import Donar from "../atoms/Donar";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const router = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 500) {
      console.log(latest);
    } else {
      setHidden(false);
    }
  });

  if (router.startsWith("/main-system")) {
    return (
      <div className="nav-bar-component pb-20">
        <motion.nav
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`fixed z-50 flex w-full items-center bg-secondary p-5 text-white`}
        >
          <Link
            href={"/main-system"}
            className="flex items-start mx-10 rounded-md bg-opacity-10 hover:bg-black"
          >
            Expedientes
          </Link>
          <Link
            href={"/main-system/reports"}
            className="flex items-start mx-10 rounded-md bg-opacity-10 hover:bg-black"
          >
            Estadísticas
          </Link>
          <Link
            href={"/"}
            className="flex h-full w-32 justify-center rounded-full bg-third py-2 text-center drop-shadow-md hover:bg-[rgb(255,40,40)]"
          >
            Salir
          </Link>
          <div className="ml-auto flex justify-center">
            <Link
              href={"/main-system"}
              className="ml-10 mr-5 flex items-center rounded-md bg-opacity-10 hover:bg-black"
            >
              Expedientes
            </Link>
            <Link
              href={"/main-system/reports"}
              className="ml-5 mr-10 flex items-center rounded-md bg-opacity-10 hover:bg-black"
            >
              Reportes
            </Link>
            <Link
              href={"/"}
              className="flex h-full w-32 justify-center rounded-full bg-third py-2 text-center drop-shadow-md hover:bg-[rgb(255,40,40)]"
            >
              Salir
            </Link>
          </div>
        </motion.nav>
      </div>
    );
  }
  return (
    <div className="pb-20">
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed z-50 flex w-full items-center justify-between bg-secondary p-5 text-white`}
      >
        <Link href={"/"}>
          <img src="icons/logo.png" className="w-32" />
        </Link>
        <Link
          href={"/access-page"}
          className="me-96 flex items-start rounded-md bg-opacity-10 hover:bg-black"
        >
          Acceso
        </Link>
        <div className="flex h-full gap-5">
          <nav className="flex gap-10">
            {navbar.map((link) => (
              <Link
                href={link.href}
                className="rounded-md bg-opacity-10 p-2 px-5 hover:bg-black"
                key={link.href}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Donar />
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
