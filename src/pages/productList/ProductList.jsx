import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import { Container, Filter, FilterContainer, FilterText, Input, Option, SearchContainer, Select, Title } from "./productList.styles";


const ProductList = () => {

  const location = useLocation()
  const cat = location.pathname.split("/")[2];
  const [catFilters, setCatFilter] = useState({})
  const [catSort, setCatSort] = useState("newest")

  const filterChangeHandler = (e) => {
    const value = e.target.value
    setCatFilter({
      ...catFilters,
      [e.target.name] : value
    })
  }

  const catSortHandler = (e) => {
    setCatSort(e.target.value)
  }


  return (
    <Container>
      <Title>Our Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="categories" onChange={filterChangeHandler}>
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
          <Select name="price" onChange={filterChangeHandler}>
            <Option disabled >
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
          <Select onChange={catSortHandler}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      
        <SearchContainer>
          <Search />
          <Input placeholder="search for products...." />
        </SearchContainer>
      
      <Products cat={cat} filters={catFilters} sort={catSort} />
      <Newsletter />
    </Container>
  );
};

export default ProductList;
