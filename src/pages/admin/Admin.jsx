import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../../components/AdminDashboard/sidebar/Sidebar";
import Topbar from "../../components/AdminDashboard/topbar/Topbar";
import Home from "./home/Home";
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
        <UserList />
        {/* <Routes>
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/users" element={<UserList />} />
        </Routes> */}
      </Container>
    </>
  );
};

export default Admin;
