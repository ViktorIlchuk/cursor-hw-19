import React, {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import { Card, Logo, Form, Input, Button, Error, InputContainer, LogoContainer } from '../components/AuthForm';
import { useAuth } from "../context/auth";
import { useLogin } from "../context/login";
import logoImg from "../img/padlock.png";


function Signup() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, seFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const {setAuthTokens} = useAuth();
  const {authTokens} = useAuth()
  const {setIsLoggedIn} = useLogin();
  const {isLoggedIn} = useAuth();

  const signupHandler = () => {
    setAuthTokens(`${email}${password}`)
    setIsLoggedIn(true);
    console.log('signup', authTokens.tokens)
    
  }
  
  if(isLoggedIn) {
    return <Redirect to="/main" />;
  }


  return (
    <Card>
      <LogoContainer>
        <Logo src={logoImg} />
      </LogoContainer>
      <h2>Sign up</h2>
      <Form>
        <InputContainer>
          <Input
            type="text"
            placeholder="First Name *"
            value={firstName}
            signup
            onChange={ e => seFirstName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Last Name *"
            value={lastName}
            signup
            onChange={ e => setLastName(e.target.value)}
          />
        </InputContainer>
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={ e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={ e => setPassword(e.target.value)}
        />
        <Button onClick={signupHandler} >Sign Up</Button>
      </Form>
      <Link to="/">Already have an account?</Link>
    </Card>
  );
}

export default Signup;