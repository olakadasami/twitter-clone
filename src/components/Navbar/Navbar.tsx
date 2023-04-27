import { FaTwitter } from "react-icons/fa";
import { navItems } from "./navItems";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { useModalStore } from "../../store/modalStore";

function Navbar() {
  const setOpen = useModalStore((state) => state.setOpen);
  const handleTweetModal = () => setOpen(true);

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
      <div onClick={handleTweetModal}>
        <Button href="/" title="Tweet" />
      </div>
    </nav>
  );
}

export default Navbar;
