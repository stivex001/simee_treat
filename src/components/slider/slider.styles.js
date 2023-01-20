import styled from "styled-components";

export const Container = styled.div`
width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  background-color: #333;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
`;
export const Wrapper = styled.div`


//   height: 100%;
`;

export const Slide = styled.div`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(-50%);
  transition: all 0.5s ease;

  .current {
    opacity: 1;
  transform: translateX(0);
  }

//   width: 100vw;
//   // height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #${props => props.bg};
//   transition: all 1.5s ease
`;

export const ImgContainer = styled.div`
  height: 100%;
//   flex: 1;
`;

export const Image = styled.img`
//   height: 80%;
`;
export const InfoContainer = styled.div`
position: absolute;
  text-align: center;
  top: 23rem;
  left: 50%;
  opacity: 0;
  width: 50%;
  padding: 3rem;
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.4);
  animation: slide-up 1s ease 0.5s;
  animation-fill-mode: forwards;
  //   visibility: hidden;
`;

export const Title = styled.h1`
font-size: 4.5rem;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;



