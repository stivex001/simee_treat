import React from 'react'
import styled from 'styled-components';
import Sidebar from '../../components/AdminDashboard/sidebar/Sidebar'
import Topbar from '../../components/AdminDashboard/topbar/Topbar'
import Home from './home/Home';

const Container = styled.div`
display: flex;
`;

const Admin = () => {
  return (
    <div>
      <Topbar />
      <Container>
         <Sidebar />
         <Home/>
      </Container>
     
    </div>
  )
}

export default Admin