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
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="categories" onChange={filterChangeHandler}>
            <Option disabled >
              Cakes
            </Option>
            <Option>celebration cakes</Option>
            <Option>plain cakes</Option>
            <Option>cup cakes</Option>
            <Option>pocket friendly cakes</Option>
            <Option>chinchin</Option>
            <Option>doughnut</Option>
            <Option>meatpie</Option>
            <Option>fishroll</Option>
            <Option>eggroll</Option>
            <Option>puffpuff</Option>
          </Select>
          <Select name="price" onChange={filterChangeHandler}>
            <Option disabled >
              Size
            </Option>
            <Option>6</Option>
            <Option>7</Option>
            <Option>8</Option>
            <Option>9</Option>
            <Option>10</Option>
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
