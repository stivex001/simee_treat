import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div``;

const Span = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: orangered;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

const IconBadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 5px;
  background-color: orangered;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  font-size: 10px;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
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
          <IconContainer>
            <Language />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <IconContainer>
            <Settings />
          </IconContainer>
          <ImageContainer>
            <Image
              src="https://avatars.githubusercontent.com/u/87942124?v=4"
              alt="admin"
            />
          </ImageContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
