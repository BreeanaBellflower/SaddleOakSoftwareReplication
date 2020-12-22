import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div id="footer">
			<div id="sos-image-container">
				<div id="sos-image">
					<img
						src={process.env.PUBLIC_URL + '/images/SaddleOakLogoBig.webp'}
						alt="Saddle Oak Software Logo"
					/>
				</div>
			</div>
			<ul id="footer-links">
				<li id="email-link">
					<a href="mailto:support@saddleoak.com">support@saddleoak.com</a>
				</li>
				<li id="phone-link">
					<a href="tel:817-422-5909">817-422-5909</a>
				</li>
				<li id="social-links">
					<ul>
						<li>
							<a href="http://www.facebook.com/sosinventory">
								<img src={process.env.PUBLIC_URL + '/images/facebook.wix_mp'} alt="facebook" />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/sosinventory/">
								<img src={process.env.PUBLIC_URL + '/images/instagram.webp'} alt="instagram" />
							</a>
						</li>
						<li>
							<a href="https://twitter.com/sosinventory">
								<img src={process.env.PUBLIC_URL + '/images/twitter.webp'} alt="twitter" />
							</a>
						</li>
					</ul>
				</li>
				<li id="privacy-link">
					<Link to="/privacy">Privacy Policy</Link>
				</li>
				<li id="copyright-link">© 2018 Saddle Oak Software</li>
			</ul>
		</div>
	);
};

export default Footer;
