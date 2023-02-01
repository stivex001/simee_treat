import styled from "styled-components";

const Container = styled.div`
  flex: 4;
`;
const Title = styled.h1``;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const FormItems = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;
const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;
const Input = styled.input`
  height: 40px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;
const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;
const Option = styled.option``;
const Button = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

const NewProduct = () => {
  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <FormItems>
          <Label>Image</Label>
          <Input type="file" id="file" />
        </FormItems>
        <FormItems>
          <Label>Name</Label>
          <Input type="text" placeholder="Cake" />
        </FormItems>
        <FormItems>
          <Label>Stock</Label>
          <Input type="text" placeholder="123" />
        </FormItems>
        <FormItems>
          <Label>Active</Label>
          <Select name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </FormItems>
        <Button>Create</Button>
      </Form>
    </Container>
  )
}

export default NewProduct