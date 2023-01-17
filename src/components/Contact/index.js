import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

function Contact() {
  const [valid, setValid] = useState({ name: false, email: false, message: false })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = valid;
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tct4jgi', 'template_7pk7srz', form.current, 'ggYzov0u5hQRvZaii')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleChange = (e) => {
    const targetIsEmail = (e.target.id === 'email') ? true : false
    if (e.target.value.length) {
      targetIsEmail ? setValid({ ...valid, email: validateEmail(e.target.value) }) : setValid({ ...valid, [e.target.id]: true });
      setFormState({ ...formState, [e.target.id]: e.target.value });
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
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;