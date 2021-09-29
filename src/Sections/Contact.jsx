import React from 'react';
import {Icon} from "semantic-ui-react"

import ContactForm from '../Component/ContactForm.jsx';

export default function Contact() {
	return (
		<div className="contact-container">
			<span id="contact-section" />
			<h1>Get in touch</h1>
			<section className="contact-my-info">
				<section><Icon size='big' name="map marker alternate"/><p>Tokyo Meguro</p></section>
				<section><Icon size='big' name="phone"/><p>070-4438-5505</p></section>
				<section><Icon size='big' name="at"/><p>williamlu46503@outlook.jp</p></section>
			</section>
			<ContactForm/>
		</div>
	);
}
