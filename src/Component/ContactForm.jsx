import React from 'react';
import {Form} from 'semantic-ui-react';

function ContactForm()
{
    return(
        <Form>
        <Form.Group widths={5}>
          <Form.Input fluid label='Your Name' placeholder='Jordon Smith' />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
}


export default ContactForm;