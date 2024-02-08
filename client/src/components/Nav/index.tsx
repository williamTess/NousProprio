import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  element: ReactElement;
  onClick?: () => void;
}

const Nav = (props: Props) => {
  const { to, element, onClick } = props;
  return (
    <Link to={to} onClick={onClick}>
      {element}
    </Link>
  );
};

export default Nav;
