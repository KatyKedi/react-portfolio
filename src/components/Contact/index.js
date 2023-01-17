import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [valid, setValid] = useState({ name: false, email: false, message: false })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = valid;


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = {
    //   service_id: 'default_service',
    //   template_id: 'template_7pk7srz',
    //   user_id: 'ggYzov0u5hQRvZaii',
    //   template_params: {
    //     'name': formState.name,
    //     'email': formState.email,
    //     'message': formState.message
    //   }
    // };

    // const template_params = {
    //       'name': formState.name,
    //       'email': formState.email,
    //       'message': formState.message
    //     }

    // const dataStr = `service_id=default_service&template_id=template_7pk7srz&user_id=ggYzov0u5hQRvZaii`
    // const response = await fetch(`https://api.emailjs.com/api/v1.0/email/send?${dataStr}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    // console.log(response)
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
          <Form className='text-light' onSubmit={handleSubmit}>
            <Form.Group onChange={handleChange} className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control required isInvalid={!name} placeholder="Enter your name here" />
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control required isInvalid={!email} placeholder="Enter your email here" />
              <Form.Text className='text-light'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} required isInvalid={!message} placeholder="Type your message here" />
            </Form.Group>
            <Button className='text-light' type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;