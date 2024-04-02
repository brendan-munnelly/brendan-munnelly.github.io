import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="Home">Home page</Link>
        </li>
        <li>
          <Link to="Portfolio">Contact page</Link>
        </li>
        <li>
          <Link to="Portfolio">Portfolio page</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
