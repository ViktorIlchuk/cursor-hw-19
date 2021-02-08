import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { changeIsLogged } from "../redux/actions";
import { Card, Logo, Form, Input, Button, Error, LogoContainer, Checkbox, Label, FlexContainer, SignUpLink, Advertising } from '../components/AuthForm';
import logoImg from "../img/padlock.png";

const initialValues = {
    email: '',
    password: ''
}

function Login({isLoggedIn, changeIsLogged, authTokens}) {
    const [isError, setIsError] = useState(false);
    const [rememberUser, setRememberUser] = useState(false)
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        const rememberUser = localStorage.getItem('rememberUser') === 'true';
        const email = rememberUser ? localStorage.getItem('email') : '';
        const password = rememberUser ? localStorage.getItem('password') : '';
        setValues({
            email,
            password
        });
    }, [])

    const loginHandler = event => {
        event.preventDefault();
        localStorage.setItem('rememberUser', rememberUser);
        localStorage.setItem('email', rememberUser ? values.email : '');
        localStorage.setItem('password', rememberUser ? values.password : '');
        const currentToken = `${values.email}_${values.password}`;
        const hasAccess = authTokens.includes(currentToken);

        if(hasAccess) {
            changeIsLogged(!isLoggedIn)
            setValues({
                email: '',
                password: ''
            });
        }

        if(!hasAccess){
            setIsError(true);
        }
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
            <h1>Login</h1>
            <Form onSubmit={loginHandler}>
                <Input
                    name="email"
                    type="email"
                    placeholder="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleInputChange}
                />
                <Label>
                    <Checkbox
                        type='checkbox'                       
                        onChange={() => setRememberUser(!rememberUser)}
                    />
                    <span>Remember me</span>
                </Label>
                <Button type='submit' >Sign In</Button>
            </Form>
            <FlexContainer>
                <SignUpLink to="#">Forgot password?</SignUpLink>
                <SignUpLink to="/signup">Don't have an account? Sigh Up</SignUpLink>
            </FlexContainer>
            { isError &&<Error>The username or password provided were incorrect!</Error> }
            <Advertising>Copyright &#169; Your website 2020</Advertising>
        </Card>
    )
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    authTokens: state.auth.authTokens
})

export default connect(mapStateToProps, {changeIsLogged})(Login);