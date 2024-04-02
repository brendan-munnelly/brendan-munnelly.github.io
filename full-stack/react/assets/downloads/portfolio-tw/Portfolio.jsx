import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <h1>Portfolio page</h1>
      <p>This is some placeholder text.</p>
      <p>Test links:</p>
      <ul>
        <li>
          <Link to="Home">Home page</Link>
        </li>
        <li>
          <Link to="Portfolio">Contact page</Link>
        </li>
        <li>
          <Link to="Privacy">Privacy page</Link>
        </li>
      </ul>
    </>
  );
};

export default Portfolio;
