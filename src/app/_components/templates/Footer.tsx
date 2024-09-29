"use client";
import { usePathname } from "next/navigation";
import FooterContent from "../organisms/FooterContent";

const Footer: React.FC = () => {
  const router = usePathname();
  if (router === "/main-system" || router === "/main-system/reports") {
    return <div />;
  }
  return (
    <footer className="flex w-full bg-secondary p-4 md:h-60">
      <FooterContent />
    </footer>
  );
};

export default Footer;
