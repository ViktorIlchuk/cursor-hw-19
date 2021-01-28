import React, {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import logoImg from "../img/padlock.png";
import { Card, Logo, Form, Input, Button, Error, LogoContainer } from '../components/AuthForm';
import { useAuth } from "../context/auth";
import { useLogin } from "../context/login";

function Login() {
    const {setIsLoggedIn} = useLogin();
    const {isLoggedIn} = useLogin();
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {authTokens} = useAuth();

    const loginHandler = () => {
        const currentToken = `${email}${password}`;
        if(authTokens.tokens.includes(currentToken)) {
            setIsLoggedIn(true)
        }
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
            <Form>
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
                <Button onClick={loginHandler} >Sign In</Button>
            </Form>
            <Link to="/signup">Don't have an account?</Link>
            { isError &&<Error>The username or password provided were incorrect!</Error> }
        </Card>
    )
};

export default Login;