import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
} from "./register.styles";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input type='text' placeholder="firstname" />
          <Input type='text' placeholder="lastname" />
          <Input type='text' placeholder="username" />
          <Input type='email' placeholder="email" />
          <Input type='text' placeholder="passwword" />
          <Input type='text' placeholder="confirm password" />
          <Agreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
