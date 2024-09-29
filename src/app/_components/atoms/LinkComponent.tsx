import Link from "next/link";

interface LinkComponentProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
  href,
  className,
  children,
}) => (
  <Link
    href={href}
    className={`text-lg p-2 transition-colors duration-300 hover:bg-opacity-10 hover:bg-black rounded-md ${className}`}
  >
    {children}
  </Link>
);

export default LinkComponent;
