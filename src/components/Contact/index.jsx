import React from 'react';

import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './contact.scss';

const Contact = () => {
	return(
		<section className="contact-page" >
			<h1>Get in touch!</h1>
			<a href="https://github.com/brendan1538/"  target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub} size="7x" style={{color: "#fff"}} />
			</a>
			<a href="https://twitter.com/brendan1538"  target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faTwitter} size="7x" style={{color: "#fff"}} />
			</a>
		<a href="https://www.linkedin.com/in/brendan-w-laughlin/"  target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faLinkedin} size="7x" style={{color: "#fff"}} />
		</a>
		<h2><a  className="mailto" href="mailto:blaughlindev@gmail.com">Send me an email</a></h2>
		</section>
	);
}

export default Contact;