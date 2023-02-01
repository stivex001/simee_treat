import { Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "../../../components/AdminDashboard/chart/Chart";
import { productData } from "../../../components/AdminDashboard/chart/data";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const TitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Title = styled.h1``;

const Button = styled.button`
width: 80px;
border: none;
padding: 5px;
background-color: teal;
color: white;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
`;

const Top = styled.div`
display: flex;
`;

const Left = styled.div`
flex: 1;
`;

const Right = styled.div`
flex:1;
padding: 20px;
margin: 20px;
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
`;


const InfoTop = styled.div`
display: flex;
align-items: center;
`;

const InfoBottom = styled.div`
margin-top: 10px;
`;

const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
margin-right: 20px;
`;

const Name = styled.span`
font-weight: 600;
`;

const InfoItem = styled.div`
width: 150px;
display: flex;
justify-content: space-between;
`;

const Key = styled.span`
font-weight: 600;
`;

const Value = styled.span`

`;

const Bottom = styled.div`
flex:1;
padding: 20px;
margin: 20px;
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
`;
const Form = styled.form`
display: flex;
justify-content: space-between;
`;
const FormLeft = styled.div`
display: flex;
flex-direction: column;
`;
const LeftLabel = styled.label`
margin-bottom: 10px;
color: gray;
`;
const LeftInput = styled.input`
margin-bottom: 10px;
border: none;
padding: 5px;
border-bottom: 1px solid gray;
`;
const Select = styled.select`
margin-bottom: 10px;
`;
const Option = styled.option``;
const FormRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const Upload = styled.div`
display: flex;
align-items: center;
`;
const UploadImg = styled.img`
width: 100px;
height: 100px;
border-radius: 10px;
object-it: cover;
margin-right: 20px;
`;
const FileLabel = styled.label``;
const FileInput = styled.input``;
const UpdateButton = styled.button`
border: none;
padding: 5px;
border-radius: 5px;
background-color: darkblue;
color: white;
font-weight: 600;
cursor: pointer;
`;

const Product = () => {
  return (
    <Container>
        <TitleContainer>
            <Title>Product</Title>
            <Link>
            <Button>Create</Button>
            </Link>
        </TitleContainer>

        <Top>
            <Left>
                <Chart data={productData} dataKey="Sales" title="Sales Performance" />
            </Left>
            <Right>
                <InfoTop>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/220px-Pound_layer_cake.jpg" />
                    <Name>Cakes</Name>
                </InfoTop>
                <InfoBottom>
                    <InfoItem>
                        <Key>id:</Key>
                        <Value>123</Value>
                    </InfoItem>
                    <InfoItem>
                        <Key>sales:</Key>
                        <Value>123</Value>
                    </InfoItem>
                    <InfoItem>
                        <Key>active:</Key>
                        <Value>yes</Value>
                    </InfoItem>
                    <InfoItem>
                        <Key>in stock:</Key>
                        <Value>no</Value>
                    </InfoItem>
                </InfoBottom>
            </Right>
        </Top>
        <Bottom>
            <Form>
                <FormLeft>
                    <LeftLabel>Product Name</LeftLabel>
                    <LeftInput placeholder='cake' />
                    <LeftLabel>In Stock</LeftLabel>
                    <Select name='inStock' id='idStock'>
                        <Option value='yes'>Yes</Option>
                        <Option value='no'>No</Option>
                    </Select>
                    <LeftLabel>Active</LeftLabel>
                    <Select name='active' id='active'>
                        <Option value='yes'>Yes</Option>
                        <Option value='no'>No</Option>
                    </Select>
                </FormLeft>
                <FormRight>
                    <Upload>
                        <UploadImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/220px-Pound_layer_cake.jpg" />
                        <FileLabel for='file'>
                            <Publish style={{cursor: 'pointer'}} />
                        </FileLabel>
                        <FileInput type='file' if='file' style={{display: 'none'}} />
                    </Upload>
                    <UpdateButton>Update</UpdateButton>
                </FormRight>
            </Form>
        </Bottom>
    </Container>
  )
}

export default Product