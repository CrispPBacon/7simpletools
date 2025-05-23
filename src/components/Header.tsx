import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();

  const scrollToView = (id: string) => {
    navigate("/");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="page-header flex align-center">
      <nav className="page-navbar flex align-center">
        <h2 onClick={() => navigate("/")}>BSCS-3</h2>
        <ul className="flex">
          <li onClick={() => scrollToView("home")}>
            <a>Home</a>
          </li>
          <li onClick={() => scrollToView("about")}>
            <a>About</a>
          </li>
          <li onClick={() => scrollToView("contact")}>
            <a>Contact</a>
          </li>
          <li
            onClick={() => setToggleMenu(!toggleMenu)}
            className="flex align-center"
          >
            <a>Tools</a>
            <span className="material-symbols-outlined"> arrow_drop_down </span>
            <div className={toggleMenu ? `tools-menu active` : "tools-menu"}>
              <span
                className="menu-item flex"
                onClick={() => navigate("/base-converter")}
              >
                Base Converter
              </span>
              <span
                className="menu-item flex"
                onClick={() => navigate("/simple-calculator")}
              >
                Simple Calculator
              </span>
              <span
                className="menu-item flex"
                onClick={() => navigate("/password-generator")}
              >
                Password Generator
              </span>
              <span
                className="menu-item flex"
                onClick={() => navigate("/bmi-calculator")}
              >
                BMI Calculator
              </span>
              <span
                className="menu-item flex"
                onClick={() => navigate("/unit-converter")}
              >
                Unit Converter
              </span>
              <span
                className="menu-item flex"
                onClick={() => navigate("/currency-converter")}
              >
                Currency Converter
              </span>
              <span
                className="menu-item flex"
                onClick={() => navigate("/qr-code-generator")}
              >
                QR Code Generator
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
