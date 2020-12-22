import { useEffect } from 'react';
import '../styles/Products.css';
import Footer from './Footer';
import HeaderAndSubheader from './HeaderAndSubheader';

const Products = () => {
	useEffect(() => {
		document.title = 'Saddle Oak Software | Products';
	});

	return (
		<div id="page-container">
			<div id="background-image">
				<img
					id="products-background"
					src={process.env.PUBLIC_URL + '/images/products-bg.webp'}
					alt="products background"
				/>
			</div>
			<div id="products-content">
				<HeaderAndSubheader
					header="PRODUCTS"
					subheader="Constantly designing and developing to deliver the best."
				/>
				<div id="products-grid">
					<div className="product-item">
						<div className="product-item-image-container">
							<img
								src={process.env.PUBLIC_URL + '/images/SOS Logo 300dpi - cropped.webp'}
								alt="SOS Inventory"
							/>
						</div>
						<h1>SOS Inventory</h1>
						<p>Inventory, Order Management, and Manufacturing for QuickBooks Online</p>
						<button onClick={() => (document.location = 'http://www.sosinventory.com/')}>
							<a href="http://www.sosinventory.com/">Learn More</a>
						</button>
					</div>
					<div className="product-item">
						<h1>Saddle Oak Labs</h1>
						<p>More innovative software for small businesses coming in 2020!</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Products;
