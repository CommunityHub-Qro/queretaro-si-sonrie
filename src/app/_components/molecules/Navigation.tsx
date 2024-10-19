import Donar from "../atoms/Donar";
import LinkComponent from "../atoms/LinkComponent";

interface NavLink {
  href: string;
  name: string;
}

interface NavigationProps {
  links: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => (
  <nav className="flex w-full flex-col items-center gap-5 md:flex-row md:flex-wrap md:justify-between">
    {links.map((link) =>
      link.name == "Donar" ? (
        <Donar key={link.href} />
      ) : (
        <LinkComponent
          href={link.href}
          className="rounded-md bg-opacity-10 p-2 px-5 hover:bg-black"
          key={link.href}
        >
          {link.name}
        </LinkComponent>
      ),
    )}
  </nav>
);

export default Navigation;
