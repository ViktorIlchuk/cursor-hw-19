import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
  width: ${props =>(props.signup ? "48%" : "100%")};
  padding: 1rem;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  background-color: #000;
  box-sizing: border-box;
  color: lightgray;
  font-size: 18px;
`;

const Button = styled.button`
  background: lightblue;
  border-radius: 3px;
  border: none;
  padding: 1rem;
  color: black;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgb(245,123,136);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
`

const Logo = styled.img`
  width: 30px;
`;

const Error = styled.div`
  background-color: red;
`;

export { Form, Input, InputContainer, Button, Logo, LogoContainer, Card, Error };