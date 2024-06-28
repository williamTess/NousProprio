import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  element: ReactElement;
  onClick?: () => void;
  disable?: boolean;
}

const Nav = (props: Props) => {
  const { to, element, onClick, disable = false } = props;

  if (disable) return element;

  return (
    <Link to={to} onClick={onClick} className="sm:self-end">
      {element}
    </Link>
  );
};

export default Nav;
