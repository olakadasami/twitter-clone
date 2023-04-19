import { FaTwitter } from "react-icons/fa";
import { navItems } from "./navItems";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

function Navbar() {
  return (
    <nav className="flex flex-col py-10 gap-6 px-10">
      <Link className="self-start" to={"/"}>
        <FaTwitter className="text-color-primary-blue" size={50} />
      </Link>
      <ul className="flex flex-col">
        {navItems.map((item) => (
          <NavItem
            key={item.title}
            title={item.title}
            href={item.href}
            Icon={item.Icon}
          />
        ))}
      </ul>
      <Button href="/" title="Tweet" />
    </nav>
  );
}

export default Navbar;
