import { Search } from "@mui/icons-material";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import { Container, Filter, FilterContainer, FilterText, Input, Option, SearchContainer, Select, Title } from "./productList.styles";


const ProductList = () => {
  return (
    <Container>
      <Title>Our Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled >
              Cakes
            </Option>
            <Option>Celebration Cakes</Option>
            <Option>Plain Cakes</Option>
            <Option>CupCakes</Option>
            <Option>Pocket Friendly Cakes</Option>
            <Option>Chinchin</Option>
            <Option>Doughnut</Option>
            <Option>Meatpie</Option>
            <Option>Fishroll</Option>
            <Option>Eggroll</Option>
            <Option>Puff Puff</Option>
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
