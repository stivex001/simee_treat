import styled from "styled-components";
import Chart from "../../../components/AdminDashboard/chart/Chart";
import { userData } from "../../../components/AdminDashboard/chart/data";
import FeaturedInfo from "../../../components/AdminDashboard/featurerdInfo/FeaturedInfo";

const Container = styled.div`
flex: 4;
`;

const Home = () => {
  return (
    <Container>
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
    </Container>
  )
}

export default Home