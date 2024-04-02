import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <p>This is some placeholder text.</p>

      <p>Test links:</p>
      <ul>
        <li>
          <Link to="Portfolio">Portfolio page</Link>
        </li>
        <li>
          <Link to="Contact">Contact page</Link>
        </li>
        <li>
          <Link to="Privacy">Privacy page</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
