import React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

function ContactForm() {
  return (
    <Form className="form-container">
      <Form.Group className="general-input-wrapper">
       <Form.Group className="general-input">
        <Form.Input
          fluid
          label="Your Name"
          placeholder="Jordon Smith"
          control={Input}
        />
        <Form.Input
          id="form-input-email"
          label="Email"
          placeholder="watisuraddress@gmail.com"
          control={Input}
        />
        <Form.Input label="Phone" placeholder="xxxxxxxxxxx" control={Input}/>
        </Form.Group>
       
        <Form.TextArea label="Message" rows={10} placeholder='Your Message' />
      </Form.Group>

      <Form.Button className="submit-button">Talk to you soon!</Form.Button>
    </Form>
  );
}

export default ContactForm;
