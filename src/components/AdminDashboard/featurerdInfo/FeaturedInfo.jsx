import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;
const FeaturedItem = styled.div`
flex: 1;
margin: 0px 20px;
padding: 30px;
border-radius: 10px;
`;
const FeaturedTitle = styled.span`

`;
const FeaturedMoneyContainer = styled.div`

`;
const FeaturedMoney = styled.span`

`;
const FeaturedMoneyRate = styled.span`

`;
const FeaturedSub = styled.span`

`;

const FeaturedInfo = () => {
  return (
    <Container>
        <FeaturedItem>
            <FeaturedTitle>Revenue</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>#250,000</FeaturedMoney>
                <FeaturedMoneyRate>-11.4 <ArrowDownward /></FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedTitle>Sales</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>#500,000</FeaturedMoney>
                <FeaturedMoneyRate>11.4 <ArrowUpward /></FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedTitle>Cost</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>#450,000</FeaturedMoney>
                <FeaturedMoneyRate>+8.4 <ArrowUpward /></FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>
    </Container>
  )
}

export default FeaturedInfo