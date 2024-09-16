"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Footer() {
  const router = usePathname();
  if (router === "/main-system" || router === "/main-system/reports"){
    return(
      <div/>
    );
  }
  return (
    <footer className="flex w-full bg-secondary p-4 md:h-60">
      <div className="flex w-full flex-col items-center justify-center space-y-3">
        <p className="flex items-center text-3xl font-medium text-white md:text-4xl">
          <img src="/icons/logo.png" className="mr-2 h-8 md:h-10" alt="Logo" />
        </p>
        <p className="inline-flex items-center space-x-2 text-sm text-white md:text-base">
          <img
            src="/icons/phone_icon.png"
            className="h-4"
            style={{
              filter: "invert(1) sepia(1) hue-rotate(180deg) saturate(2)",
            }}
            alt="Phone icon"
          />
          <span>(442) 214-42-36</span>
        </p>
        <p className="inline-flex items-center space-x-2 text-sm text-white md:text-base">
          <img src="/icons/email_icon.png" className="h-3" alt="Email icon" />
          <span>iquec.lph.qro@gmail.com</span>
        </p>
        <p className="inline-flex items-center space-x-4 text-sm text-white md:text-base">
          <Link
            href="https://wa.me/4424613659"
            className="rounded-xl hover:bg-cyan-950"
          >
            <img
              src="/icons/whatsapp_icon.png"
              className="h-8"
              alt="Whatsapp icon"
            />
          </Link>
          <Link
            href="https://www.facebook.com/people/Queretaro-Si-Sonrie/100064085523281/"
            className="rounded-xl hover:bg-cyan-950"
          >
            <img
              src="/icons/facebook_icon.png"
              className="h-10"
              style={{
                filter: "invert(1) sepia(1) hue-rotate(180deg) saturate(2)",
              }}
              alt="Facebook icon"
            />
          </Link>
          <Link
            href="https://www.instagram.com/qrosisonrie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="rounded-xl hover:bg-cyan-950"
          >
            <img
              src="/icons/instagram_icon.png"
              className="h-8"
              alt="instagram icon"
            />
          </Link>
        </p>
        <p className="text-xs text-white md:text-base">
          © 2024 Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
