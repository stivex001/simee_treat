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
const Gender = styled.div``;
const GenderInput = styled.input`
  margin-top: 15px;
`;
const GenderLabel = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
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

const Newuser = () => {
  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <FormItems>
          <Label>Username</Label>
          <Input type="text" placeholder="baistevoo" />
        </FormItems>
        <FormItems>
          <Label>Full Name</Label>
          <Input type="text" placeholder="Adeyemo Stephen" />
        </FormItems>
        <FormItems>
          <Label>Email</Label>
          <Input type="email" placeholder="stephenadeyemo@gmail.com" />
        </FormItems>
        <FormItems>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </FormItems>
        <FormItems>
          <Label>Phone</Label>
          <Input type="text" placeholder="08162174754" />
        </FormItems>
        <FormItems>
          <Label>Address</Label>
          <Input type="text" placeholder="FCT | Nigeria" />
        </FormItems>
        <FormItems>
          <Label>Gender</Label>
          <Gender>
            <GenderInput type="radio" name="gender" id="male" value="male" />
            <GenderLabel for="male">Male</GenderLabel>
            <GenderInput
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <GenderLabel for="female">Female</GenderLabel>
            <GenderInput type="radio" name="gender" id="other" value="other" />
            <GenderLabel for="other">Other</GenderLabel>
          </Gender>
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
  );
};

export default Newuser;
