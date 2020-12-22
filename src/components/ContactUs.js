import { useEffect } from 'react';
import '../styles/ContactUs.css';
import Footer from './Footer';

const ContactUs = () => {
	useEffect(() => {
		document.title = 'Saddle Oak Software | Contact Us';
	});

	const handleForm = (e) => {
		let formElements = e.target.parentElement.children;
		let invalidName = !formElements[0].value || !formElements[0].value.match(/^([^0-9]*)$/);
		let invalidEmail =
			!formElements[1].value ||
			!formElements[1].value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
		if (invalidName) {
			e.preventDefault();
			formElements[0].scrollIntoView();
		} else if (invalidEmail) {
			e.preventDefault();
			formElements[1].scrollIntoView();
		}
	};

	return (
		<div className="page-container">
			<div id="contact-us-container">
				<div id="contact-us-details">
					<div id="background-image" className="contact-us-background">
						<img
							id="careers-background"
							src={process.env.PUBLIC_URL + '/images/contact-us.webp'}
							alt="products background"
						/>
					</div>
					<h1>CONTACT US</h1>
					<p>Telephone: 817-422-5909</p>
					<br />
					<p>Business Hours:</p>
					<p>M-F 9:00am - 6:00pm</p>
					<p>Central US Time</p>
					<br />
					<p>Email support also available on evenings and weekends:</p>
					<p>support@saddleoak.com</p>
					<br />
					<p>2909 Turner Warnell Road</p>
					<p>Suite 151</p>
					<p>Arlington, TX 76001</p>
					<div />
				</div>
				<div id="contact-us-form">
					<form>
						<input id="name" placeholder="Name *" />
						<input id="email" placeholder="Email *" />
						<input id="subject" placeholder="Subject" />
						<textarea id="message" placeholder="Message" />
						<button onClick={handleForm} id="submit-message">
							Send
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ContactUs;
