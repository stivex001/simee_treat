import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const Title = styled.h1``;
const Form = styled.form``;
const FormItems = styled.div``;
const Label = styled.label``;
const Input = styled.input``;
const Gender = styled.div``;

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
                    <Input type="radio" name='gender' id='male' value='male' />
                <Label for='male'>Male</Label>
                <Input type="radio" name='gender' id='female' value='female' />
                <Label for='female'>Female</Label>
                <Input type="radio" name='gender' id='other' value='other' />
                <Label for='other'>Other</Label>
                </Gender>
                
            </FormItems>
        </Form>
    </Container>
  )
}

export default Newuser