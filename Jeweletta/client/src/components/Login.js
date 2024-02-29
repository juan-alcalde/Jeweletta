import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, Link } from "react-router-dom";
import { login } from "../Managers/UserProfileManager";
import "./Login.css";


export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login({ email, password })
      .then(r => {
        if (r) {
          setIsLoggedIn(true)
          navigate('/')
        } else {
          alert("Invalid email or password")
        }
      })
  };

  return (
    <div className="login-container">
    <div className="login-background"></div>
    <div className="login-form-container" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "20px", borderRadius: "8px" }}>
      <Form className="login--Form" onSubmit={loginSubmit}>
        <div className="login-Title">
          <h1 className="loginLogoText"style={{ fontFamily: "Great Vibes" }}>LOGIN</h1>
        </div>
        <hr></hr>
        <fieldset>
          <FormGroup>
           <strong> <Label for="email"style={{ fontSize: "20px"}}>Email</Label></strong>
            <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <strong><Label for="password"style={{ fontSize: "20px"}}>Password</Label></strong>
            <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Button className="submit-btn">Login</Button>
          </FormGroup>
         <strong> <em>
            Not registered? <Link to="/register">Register</Link>
          </em></strong>
        </fieldset>
      </Form>
    </div>
  </div>
  );
}
