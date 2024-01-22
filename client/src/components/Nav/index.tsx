import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  element: ReactElement;
}

const Nav = (props: Props) => {
  const { to, element } = props;
  return <Link to={to}>{element}</Link>;
};

export default Nav;
