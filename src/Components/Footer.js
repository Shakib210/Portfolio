import React, { useState } from "react";
import { Form,Row,Col,Button } from "react-bootstrap";
import emailjs from 'emailjs-com';
import "../App.css";

const ContactScreen = ({ refe }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitdetails = (e) => {
    e.defaultprevented()
    
    if (email && message) {
    emailjs.sendForm('gmail', 'template_uenozf4',e.target, 'user_l0pWGHHYsw6hboX2pCzfq')
      .then((result) => {
          console.log(result.text);
          alert(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert(error.text);
      });
    } else {
      alert("Fill the fields properly");
    }
    
  };

 
  return (
    <div className="form px-5">
        <Row className="d-flex justify-content-center">
            <Col md={8}>
            <h3 className="d-flex justify-content-center mt-3">
        <strong>Contact me</strong>
      </h3>
      <Form ref={refe} className="p-3" onSubmit={submitdetails}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">ok</Button>
      </Form>
            </Col>
        </Row>
      
    </div>
  );
};

export default ContactScreen;
