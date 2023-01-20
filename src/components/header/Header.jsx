import { Close, Menu } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Simee.<span>Treat</span>
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <NavLink to="/cart">
      <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlinedIcon style={{ fontSize: "40px" }} />
      </Badge>
    </NavLink>
  </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className={styles.header}>
        {logo}

        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <Close style={{ fontSize: "30px" }} onClick={hideMenu} />
            </li>
            <li>
              <NavLink className={activeLink} to="/admin">
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink className={activeLink} to="/login">
                Login
              </NavLink>
              <NavLink className={activeLink} to="/register">
                Register
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {cart}
          <Menu style={{ fontSize: "50px" }} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
