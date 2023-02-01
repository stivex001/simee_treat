import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../../components/AdminDashboard/sidebar/Sidebar";
import Topbar from "../../components/AdminDashboard/topbar/Topbar";
import Home from "./home/Home";
import Newuser from "./newuUer/Newuser";
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
        <Newuser />
        {/* <Routes>
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/user/:userId" element={<User />} />
        </Routes> */}
      </Container>
    </>
  );
};

export default Admin;
