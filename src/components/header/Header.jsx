import { Close, Menu } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { logout } from "../../redux/apiCalls";
import styles from "./Header.module.scss";
import "react-toastify/dist/ReactToastify.css";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Simee.<span>Treat</span>
      </h2>
    </Link>
  </div>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const handleLogout = () => {
    logout(dispatch())
    toast.success("You've successfully Logged out")
    navigate("/login");
      
  }

  return (
    <header>
      <ToastContainer />
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
            {currentUser && 
              <span className={styles.links} onClick={handleLogout}>
                <NavLink >
                  Logout
                </NavLink>
              </span>
            }

            <span className={styles.cart}>
              <NavLink to="/cart">
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon style={{ fontSize: "40px" }} />
                </Badge>
              </NavLink>
            </span>
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          <span className={styles.cart}>
            <NavLink to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon style={{ fontSize: "40px" }} />
              </Badge>
            </NavLink>
          </span>
          <Menu style={{ fontSize: "50px" }} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
