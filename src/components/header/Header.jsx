
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { MenuItem } from "@mui/material";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Container, { Center, Left, Logo, Right, Wrapper } from "./header.styles";



const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Simee Treat.</Logo>
        </Left>
        <Center>
          <MenuItem><NavLink style={{textDecoration: 'none'}} to="/admin">ADMIN </NavLink> </MenuItem>
          <MenuItem><NavLink style={{textDecoration: 'none'}} to="/about">ABOUT US </NavLink></MenuItem>
          <MenuItem><NavLink style={{textDecoration: 'none'}} to="/contact">CONTACT US </NavLink> </MenuItem>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
