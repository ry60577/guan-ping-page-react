import { useState } from 'react';
import { Link } from "react-router-dom";
import "../assets/styles/layout/header.scss";
import data from "../staticData";
import Logo from "../assets/logo.png";

const Header = () => {
  const { header } = data;
  const [menuActivate, setMenuActivate] = useState<Boolean>(false);
  const [menuClassName, setMenuClassName] = useState<string>("menu_icon");
  const [menuWidth, setMenuWidth] = useState<string>("menu_container");
  const handleMenuActivate = () => {
    setMenuClassName("menu_icon");
    setMenuWidth('menu_container')
    setMenuActivate(!menuActivate)
    if (menuActivate) {
        setMenuWidth('menu_open')
        setMenuClassName("menu_icon menu_icon_activate");
    }
  };
  return (
    <header>
      <Link className="logo" to="/">
        <img src={Logo} alt="" />
        <span>Guan Ping Chen</span>
      </Link>
      <div className={menuWidth}>
        <nav>
          {header.map((item) => (
            <Link to={item.route} key={item.route}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className={menuClassName} onClick={handleMenuActivate}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
  );
};

export default Header;
