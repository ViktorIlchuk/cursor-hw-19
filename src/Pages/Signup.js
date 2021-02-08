import React, {useState} from "react";
import { Redirect } from 'react-router-dom';
import { Card, Logo, Form, Input, Button, FlexContainer, LogoContainer, SignUpLink, Advertising } from '../components/AuthForm';
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
        <FlexContainer>
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
        </FlexContainer>
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
        <SignUpLink to="/">Already have an account? Sign in</SignUpLink>
      </Form>
      <Advertising>Copyright &#169; Your website 2020</Advertising>
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