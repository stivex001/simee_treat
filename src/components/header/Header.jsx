import { Menu } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from './Header.module.scss'

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
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </NavLink>
            </span>
)

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(showMenu => !showMenu)
  }

  // const hideMenu = () => {
  //   setShowMenu(prev => !prev)
  // }

  return (
    <header>
      <div className={styles.header}>
        {logo}

        <nav className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }>
          <div className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }>
              </div>
          <ul>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </span>
            {cart}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {cart}
          <Menu  style={{fontSize: '50px'}} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
