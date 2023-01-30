import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import {
  Button,
  Container,
  Error,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from "./login.styles";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const userNameOnChange = (e) => {
    setUserName(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { userName, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange={userNameOnChange} />
          <Input
            type="password"
            placeholder="password"
            onChange={passwordOnChange}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          <Link>FORGOT YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
          {error && <Error>Something went wrong</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
