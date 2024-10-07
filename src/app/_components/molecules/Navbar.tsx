"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbar } from "../../constants";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import Donar from "../atoms/Donar";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const { scrollY } = useScroll();
  const router = usePathname();

  // mostrar/ocultar el navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 500) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

   if (router === "/main-system" || router === "/main-system/reports") {
    return (
      <div className="pb-20">
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
            Reportes
          </Link>
          <Link
            href={"/"}
            className="flex h-full w-32 justify-center rounded-full bg-third py-2 text-center drop-shadow-md hover:bg-[rgb(255,40,40)]"
          >
            Salir
          </Link>
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

        
        <div className="hidden md:flex me-96">
          <Link
            href={"/access-page"}
            className="flex items-start rounded-md bg-opacity-10 hover:bg-black"
          >
            Acceso
          </Link>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex h-full gap-5">
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

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: menuOpen ? "auto" : 0 }}
          className={`absolute top-full left-0 right-0 overflow-hidden bg-secondary md:hidden`}
        >
          <div className="flex flex-col items-center py-4">
            {navbar.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="w-full p-4 text-center hover:bg-black"
                onClick={() => setMenuOpen(false)} // cerrar navbar
              >
                {link.name}
              </Link>
            ))}

            <Link
              href={"/access-page"}
              className="w-full p-4 text-center hover:bg-black"
              onClick={() => setMenuOpen(false)} 
            >
              Acceso
            </Link>
            <div className="my-4">
              <Donar />
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;

