import LinkComponent from "../atoms/LinkComponent";

interface NavLink {
  href: string;
  name: string;
}

interface NavigationProps {
  links: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => (
  <nav className="flex gap-10">
    {links.map((link) => (
      <LinkComponent
        href={link.href}
        className="rounded-md bg-opacity-10 p-2 px-5 hover:bg-black"
        key={link.href}
      >
        {link.name}
      </LinkComponent>
    ))}
  </nav>
);

export default Navigation;
