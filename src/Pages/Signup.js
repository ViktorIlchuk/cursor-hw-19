import React, {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import { Card, Logo, Form, Input, Button, Error, InputContainer, LogoContainer } from '../components/AuthForm';
import { connect } from "react-redux";
import { changeIsLogged, addToken } from "../redux/actions";
import logoImg from "../img/padlock.png";

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

function Signup({isLoggedIn, changeIsLogged, addToken}) {
  const [isError, setIsError] = useState(false);
  const [values, setValues] = useState(initialValues);

  const signupHandler = event => {
    event.preventDefault();
    addToken(`${values.email}_${values.password}`)
    changeIsLogged(!isLoggedIn);
  }



  const handleInputChange = event => {
    const {name, value} = event.target;
    setValues({
      ...values,
      [name]: value
    })
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
      <Form onSubmit={signupHandler}>
        <InputContainer>
          <Input
            name='firstName'
            type="text"
            placeholder="First Name *"
            value={values.firstName}
            signup
            onChange={handleInputChange}
          />
          <Input
            name='lastName'
            type="text"
            placeholder="Last Name *"
            value={values.lastName}
            signup
            onChange={handleInputChange}
          />
        </InputContainer>
        <Input
          name='email'
          type="email"
          placeholder="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <Input
          name='password'
          type="password"
          placeholder="password"
          value={values.password}
          onChange={handleInputChange}
        />
        <Button type='submit'>Sign Up</Button>
      </Form>
      <Link to="/">Already have an account? Sign in</Link>
    </Card>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  authTokens: state.auth.authTokens
})

const mapDispatchToProps = {
  changeIsLogged,
  addToken
}

export default connect(mapStateToProps , mapDispatchToProps)(Signup);