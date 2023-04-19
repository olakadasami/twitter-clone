import { Link } from "react-router-dom";
import { ButtonProps } from "../../interfaces";

function Button({ href, title }: ButtonProps) {
  return (
    <Link
      className="text-color-white bg-color-primary-blue text-2xl text-center font-bold rounded-full px-6 py-4"
      to={href}
    >
      {title}
    </Link>
  );
}

export default Button;
