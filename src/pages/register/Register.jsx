import { useState } from "react";
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
  const [formData, setFormData] = useState({
    enterUsername: "",
    enterEmail: "",
    enterPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }
  console.log(formData)

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            placeholder="User Name"
            onChange={handleInputChange}
            required
          />
          <Input
            type="email"
            placeholder="email"
            onChange={handleInputChange}
            required
          />
          <Input
            type="password"
            placeholder="password"
            onChange={handleInputChange}
            required
          />
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
