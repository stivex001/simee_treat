import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
  padding: 20px;
`;
const WidgetTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetTable = styled.table``;
const Tr = styled.tr``;
const Th = styled.th``;
const Td = styled.td``;
const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`;
const Username = styled.span`
font-weight: 600;
`;
const Date = styled.td``;
const Amount = styled.td``;
const Status = styled.td``;

const Widgetlg = () => {
  return (
    <Container>
      <WidgetTitle>Latest Transactions</WidgetTitle>
      <WidgetTable>
        <Tr>
            <Th>Customer</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
        </Tr>
        <Tr>
            <Td>
            <Image src="https://avatars.githubusercontent.com/u/87942124?v=4" />
            <Username>Adeyemo Stephen</Username>
            </Td>
            <Date>2 Jub 2022</Date>
            <Amount>#1500</Amount>
            <Status></Status>
        </Tr>
      </WidgetTable>
    </Container>
  );
};

export default Widgetlg;
