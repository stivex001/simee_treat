import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.unsplash.com/photo-1587241321921-91a834d6d191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJha2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60")
      center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width: '75%'})}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0 ;
  padding: 10px;
  ${mobile({margin: '20px 0px'})}
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

export const Links = styled(Link)`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;

`;

export const Error = styled.span`
color: red;
`;