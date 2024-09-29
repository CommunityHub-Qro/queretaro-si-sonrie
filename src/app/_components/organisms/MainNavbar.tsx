"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "../atoms/Logo";
import Navigation from "../molecules/Navigation";
import Donar from "../atoms/Donar";
import LinkComponent from "../atoms/LinkComponent";
import AdminNavbar from "../molecules/AdminNavbar";
import { navbar } from "../../constants";

const MainNavbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú colapsable
  const router = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (router === "/main-system" || router === "/main-system/reports") {
    return <AdminNavbar />;
  }

  return (
    <nav
      className={`fixed z-50 flex w-full items-center justify-between bg-secondary p-5 text-white transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <LinkComponent href="/">
        <Logo src="icons/logo.png" alt="Logo" className="w-32" />
      </LinkComponent>

      <div className="hidden md:flex md:items-center md:gap-5">
        <LinkComponent
          href="/access-page"
          className="me-96 flex items-start rounded-md bg-opacity-10 hover:bg-black"
        >
          Acceso
        </LinkComponent>
        <Navigation links={navbar} />
        <Donar />
      </div>

      {/* Botón de menú para móviles */}
      <button
        className="flex items-center justify-center md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menú colapsable */}
      {isOpen && (
        <div className="absolute right-0 top-16 z-50 w-48 rounded-lg bg-secondary p-5 shadow-lg md:hidden">
          <LinkComponent
            href="/access-page"
            className="block py-2 text-white hover:bg-black hover:bg-opacity-10"
          >
            Acceso
          </LinkComponent>
          <Navigation links={navbar} />
          <Donar />
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
