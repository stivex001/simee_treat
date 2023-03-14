import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "./catalogues/catData";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const url = cat
        ? `https://simee-treats-backend.vercel.app/api/v1/product?category=${cat}`
        : `https://simee-treats-backend.vercel.app/api/v1/product`;
      try {
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, products, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt))
    }
    else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  },[sort])

  return (
    <Container>
      {cat ? filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      )) : products.slice(0, 6).map((item) => (
        <Product item={item} key={item._id} />
      ))} 
    </Container>
  );
};

export default Products;
