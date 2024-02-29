import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (<>
  
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col>
            <p className="text-center">&copy; 2024 JuanA Co. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </> );
};

export default Footer;
