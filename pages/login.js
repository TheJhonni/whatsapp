import { Button } from "@mui/material";
import Head from "next/head";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <h1>im login</h1>
        <Logo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
        <Button variant="outlined">Sign in with Google</Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div``;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
