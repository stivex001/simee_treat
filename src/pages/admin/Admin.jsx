import React from 'react'
import styled from 'styled-components';
import Sidebar from '../../components/AdminDashboard/sidebar/Sidebar'
import Topbar from '../../components/AdminDashboard/topbar/Topbar'

const Container = styled.div`
display: flex;
`;
const Other = styled.div`
flex: 4;
`;

const Admin = () => {
  return (
    <div>
      <Topbar />
      <Container>
         <Sidebar />
         <Other>others</Other>
      </Container>
     
    </div>
  )
}

export default Admin