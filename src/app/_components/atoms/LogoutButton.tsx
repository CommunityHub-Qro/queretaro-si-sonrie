import LinkComponent from "./LinkComponent";

const LogoutButton: React.FC = () => (
  <LinkComponent
    href="/"
    className="flex h-full w-32 justify-center rounded-full bg-third py-2 text-center drop-shadow-md hover:bg-[rgb(255,40,40)]"
  >
    Salir
  </LinkComponent>
);

export default LogoutButton;
