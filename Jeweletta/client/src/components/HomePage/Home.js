import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Home.css";

const Home = () => {
  return (<>
            <div className="home-container">
                <div className="home-background">

                </div>
            </div>
            <div className="container" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "20px", borderRadius: "8px" }}>
      <Form className="Form">
        <div className="Title">
          <p className="loginLogoText"style={{ fontFamily: "Great Vibes",fontSize: "80px", }}>JEWELETTA</p>
          
          <h1  style={{ color: "#ffffff", fontFamily: "Great Vibes",fontSize: "25px", }}>
            FANTASY ARTIST
           </h1>
        </div>
        <hr></hr>

        
      </Form>
    </div>
         </> );
};

export default Home;