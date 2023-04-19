import { Link } from "react-router-dom";
import { NavItemProps } from "../../interfaces";

function NavItem({ href, title, Icon }: NavItemProps) {
  return (
    <Link
      className="hover:bg-color-grey-light w-fit transition-all delay-200 ease-in py-4 px-8 rounded-full"
      to={href}
    >
      <div className="flex text-3xl font-medium items-center gap-6">
        <span>
          <Icon />
        </span>
        <span>{title}</span>
      </div>
    </Link>
  );
}

export default NavItem;
