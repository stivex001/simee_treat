import styled from "styled-components";
import Chart from "../../../components/AdminDashboard/chart/Chart";
import { userData } from "../../../components/AdminDashboard/chart/data";
import FeaturedInfo from "../../../components/AdminDashboard/featurerdInfo/FeaturedInfo";
import Widgetlg from "../../../components/AdminDashboard/widgetlg/Widgetlg";
import Widgetsm from "../../../components/AdminDashboard/widgetsm/Widgetsm";

const Container = styled.div`
flex: 4;
`;

const Widget = styled.div`
display: flex;
justify-content: space-between;
`;

const Home = () => {
  return (
    <Container>
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        <Widget>
            <Widgetsm />
            <Widgetlg />
        </Widget>
    </Container>
  )
}

export default Home