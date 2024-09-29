import LinkComponent from "../atoms/LinkComponent";
import LogoutButton from "../atoms/LogoutButton";

const AdminNavbar: React.FC = () => (
  <nav className="fixed z-50 flex w-full items-center bg-secondary p-5 text-white">
    <LinkComponent
      href="/main-system"
      className="flex items-start mx-10 rounded-md bg-opacity-10 hover:bg-black"
    >
      Expedientes
    </LinkComponent>
    <LinkComponent
      href="/main-system/reports"
      className="flex items-start mx-10 rounded-md bg-opacity-10 hover:bg-black"
    >
      Reportes
    </LinkComponent>
    <LogoutButton />
  </nav>
);

export default AdminNavbar;

