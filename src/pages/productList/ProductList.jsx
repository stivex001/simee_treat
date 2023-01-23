import { Search } from "@mui/icons-material";
import styled from "styled-components";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import { mobile } from "../../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({margin: '10px 20px', display: 'flex', flexDirection: 'column'})}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  ${mobile({marginRight: '0px'})}
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin: '10px 0px'})}
`;

const Option = styled.option``;

const SearchContainer = styled.div`
width: 20%;
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
${mobile({width: '70%'})}
`;

const Input = styled.input`
border: none;

&:focus {
  outline: none;
}
`;

const ProductList = () => {
  return (
    <Container>
      <Title>Cakes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Cakes
            </Option>
            <Option>Celebration Cakes</Option>
            <Option>CupCakes</Option>
            <Option>Foil Cakes</Option>
            <Option>Chinchin</Option>
            <Option>Doughnut</Option>
            <Option>Meatpie</Option>
            <Option>Fishroll</Option>
            <Option>Eggroll</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option>#5000</Option>
            <Option>#6000</Option>
            <Option>#7000</Option>
            <Option>#8000</Option>
            <Option>#9000</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      
        <SearchContainer>
          <Search />
          <Input placeholder="search for products...." />
        </SearchContainer>
      
      <Products />
      <Newsletter />
    </Container>
  );
};

export default ProductList;
