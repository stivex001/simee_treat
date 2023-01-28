import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;

export const Title = styled.h1`
  margin: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: 20px;
  ${mobile({margin: '10px 20px', display: 'flex', flexDirection: 'column'})}
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  ${mobile({marginRight: '0px'})}
`;

export const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin: '10px 0px'})}
`;

export const Option = styled.option``;

export const SearchContainer = styled.div`
width: 20%;
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
${mobile({width: '70%'})}
`;

export const Input = styled.input`
border: none;

&:focus {
  outline: none;
}
`;
