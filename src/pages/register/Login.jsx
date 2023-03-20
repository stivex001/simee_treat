import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import {
  Button,
  Container,
  Error,
  Form,
  Input,
  Links,
  Title,
  Wrapper,
} from "./login.styles";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { currentUser, isFetching, error } = useSelector((state) => state.user);

  const userNameOnChange = (e) => {
    setUserName(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });

    if (currentUser === 'null') {
      navigate('/login')
    }
    else {
      navigate('/')
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleLogin}> 
          <Input placeholder="username" onChange={userNameOnChange} />
          <Input
            type="password"
            placeholder="password"
            onChange={passwordOnChange}
          />
          {error && <Error>Something went wrong</Error>}
          <Button disabled={isFetching}>
            LOGIN
          </Button>
          <Links to=''>FORGOT YOUR PASSWORD?</Links>
          <Links to='/register'>CREATE A NEW ACCOUNT</Links>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
