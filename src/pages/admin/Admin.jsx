import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../../components/AdminDashboard/sidebar/Sidebar";
import Topbar from "../../components/AdminDashboard/topbar/Topbar";
import Home from "./home/Home";
import Newuser from "./newuUer/Newuser";
import ProductList from "./products/ProductList";
import User from "./user/User";
import UserList from "./userList/UserList";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Admin = () => {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        {/* <Home /> */}
        {/* <UserList /> */}
        {/* <User /> */}
        {/* <Newuser /> */}
        <ProductList />
        {/* <Routes>
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/user/:userId" element={<User />} />
          <Route path="/admin/newuser" element={<User />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/product/:productId" element={<Product />} />
          <Route path="/admin/newproduct/" element={<NewProduct />} />
        </Routes> */}
      </Container>
    </>
  );
};

export default Admin;
