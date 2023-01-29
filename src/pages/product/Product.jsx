import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from "./product.styles";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/product/${id}`);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const addQuantityHandler = () => {
    setQuantity((prev) => prev + 1);
  };

  const removeQuantityHandler = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };

  const handleClick = () => {};

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} alt={product.title} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>#{product.price}</Price>
          <FilterContainer>
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.colour?.map((c) => (
                <FilterColor color={c} key={c} />
              ))}
            </Filter> */}
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={removeQuantityHandler} />
              <Amount>{quantity}</Amount>
              <Add onClick={addQuantityHandler} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
