import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Pysselfrun</h1>
        <p>Personliga gåvor</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Hem</Link>
          </li>
          <li>
            <a href="">Om mig</a>
          </li>
          <li>
            <Link to={"/product"}>Produkter</Link>
          </li>
          <li>
            <Link to={"/contact"}>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
