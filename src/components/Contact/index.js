import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

function Contact() {
  const [valid, setValid] = useState({ name: false, email: false, message: false })
  const { name, email, message } = valid;
  const [alert, setAlert] = useState(null)
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && message) {
    emailjs.sendForm('service_tct4jgi', 'template_7pk7srz', form.current, 'ggYzov0u5hQRvZaii')
      .then((result) => {
        setAlert('success')
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    } else {
      setAlert('failure')
    }
  };

  const handleChange = (e) => {
    const targetIsEmail = (e.target.id === 'email') ? true : false
    if (e.target.value.length) {
      targetIsEmail ? setValid({ ...valid, email: validateEmail(e.target.value) }) : setValid({ ...valid, [e.target.id]: true });
    } else {
      setValid({ ...valid, [e.target.id]: false })
    }
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col sm={12} md={6} lg={4}>
          <Form ref={form} className='text-light' onSubmit={handleSubmit}>
            <Form.Group onChange={handleChange} className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control required isInvalid={!name} name='name' placeholder="Enter your name here" />
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control required isInvalid={!email} name='email' placeholder="Enter your email here" />
              <Form.Text className='text-light'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} required isInvalid={!message} name='message' placeholder="Type your message here" />
            </Form.Group>
            <Button className='text-light' type="submit">Submit</Button>
          </Form>
          {alert === 'success' && (
            <Alert className='my-3' variant='success'>
            Message sent. Thanks for reaching out!
          </Alert>
          )}
          {alert === 'failure' && (
            <Alert className='my-3' variant='danger'>
            Message not sent, email provided is invalid!
          </Alert>
          )}        
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;