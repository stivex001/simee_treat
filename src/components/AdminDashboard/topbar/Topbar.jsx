import { NotificationsNone } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`

`;

const Span = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: orangered;
    cursor: pointer;
`;

const Right = styled.div`

`;

const IconContainer = styled.div`
position: relative;
`;

const IconBadge = styled.span`
position: absolute;
top: -5px;
right: 5px;
background-color: orangered;
`;

const Topbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Span>Simee.TreatAdmin</Span>
            </Left>
            <Right>
                <IconContainer>
                    <NotificationsNone />
                    <IconBadge>2</IconBadge>
                </IconContainer>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Topbar