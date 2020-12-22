import '../../styles/Home.css';
import { Link } from 'react-router-dom';

const SectionPreviews = (props) => {
	return (
		<div className="section-previews">
			<div className="column-card">
				<h4>
					<Link to="/about-us">Our Company</Link>
				</h4>
				<p>
					We build great products for (very) small businesses. Almost all of our customers have less than 100
					employees, and most of them have less than 15 employees. We work with those types of companies
					day-in and day-out, and we do everything that we can to make them more successful.
				</p>
			</div>
			<div className="column-card light-card">
				<h4>
					<Link to="/products">Our Products</Link>
				</h4>
				<p>
					Our flagship product is <Link to="http://www.sosinventory.com/">SOS Inventory</Link>, the #1
					inventory, order management, and manufacturing add-on built for QuickBooks Online. We were one of
					the very first companies ever to build a product to integrate with the cloud version of QuickBooks.
					We launched SOS in 2009, and it's grown steadily ever since.
				</p>
				<br />
				<p>We've got some very exciting products to be released in 2019!</p>
			</div>
			<div className="column-card">
				<h4>
					<Link to="/careers">Our People</Link>
				</h4>
				<p>
					We do everything possible to make Saddle Oak Software a great place to work. All our staff have
					extremely flexible work schedules, and tremendous freedom of action. For more information, or to
					apply for a position with us, please visit our Careers page.
				</p>
			</div>
		</div>
	);
};

export default SectionPreviews;
