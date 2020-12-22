import { useEffect } from 'react';
import '../styles/AboutUs.css';
import HeaderAndSubheader from './HeaderAndSubheader';
import Parallax from 'react-rellax';
import AboutClients from './about-components/AboutClients';
import Footer from './Footer';

const AboutUs = () => {
	useEffect(() => {
		document.title = 'Saddle Oak Software | About Us';
	});

	return (
		<div className="page-container">
			<Parallax speed={2} id="about-background">
				<div
					className="parallax"
					style={{
						backgroundImage: `url('${process.env.PUBLIC_URL}/images/map.webp')`
					}}
				/>
			</Parallax>

			<div className="about-content">
				<HeaderAndSubheader header="ABOUT US" subheader="Solving problems for the Fortune 5,000,000." />
				<div id="about-us-cards">
					<div className="section-previews">
						<div className="column-card about-card">
							<h4>50+</h4>
							<p>
								Saddle Oak Software has customers in over 50 countries and more are choosing us every
								day!
							</p>
						</div>
						<div className="column-card light-card about-card">
							<h4>25,000+</h4>
							<p>Over 25,000 companies have used our software to enhance their small businesses.</p>
						</div>
						<div className="column-card about-card">
							<h4>Millions</h4>
							<p>
								Over the years, we've syncronized millions of transactions between SOS Inventory and
								QuickBooks Online.
							</p>
						</div>
					</div>
				</div>
				<HeaderAndSubheader
					header="CLIENTS"
					subheader="A very small sampling of our very satisfied customers."
					styling={{ marginTop: '100px' }}
				/>
				<AboutClients />
			</div>
			<Footer />
		</div>
	);
};

export default AboutUs;
