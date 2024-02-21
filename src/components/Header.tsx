import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="logo">
        <h1>Pysselfrun</h1>
        <p>Personliga gåvor</p>
      </div>
      <nav className="desktop">
        <ul>
          <li>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Hem
            </Link>
          </li>
          <li>
            <Link to={"/product"} style={{ textDecoration: "none" }}>
              Produkter
            </Link>
          </li>
          <li>
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="mobile">
        <MenuIcon
          onClick={() => {
            if (menuOpen) {
              setMenuOpen(false);
            } else {
              setMenuOpen(true);
            }
          }}
        ></MenuIcon>

        {menuOpen ? (
          <ul>
            <li>
              <Link
                to={"/"}
                style={{ textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                Hem
              </Link>
            </li>
            <li>
              <Link
                to={"/product"}
                style={{ textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                Produkter
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                style={{ textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Header;
