import { useEffect } from 'react';
import '../styles/Home.css';
import Achievements from './home-components/Achievements';
import Footer from './Footer';
import HeadlineImage from './home-components/HeadlineImage';
import SectionPreviews from './home-components/SectionPreviews';
import WhatPeopleSay from './home-components/WhatPeopleSay';

const Home = () => {
	useEffect(() => {
		document.title = 'Saddle Oak Software | Home';
	});

	return (
		<div className="page-container">
			<HeadlineImage />
			<div className="lower-fold-sections">
				<div className="blue-separator">
					<div>POWERFUL SOFTWARE. REASONABLE PRICES.</div>
					<div className="spaced-letters">SMALL BUSINESS SOLUTIONS.</div>
				</div>
				<SectionPreviews />
				<Achievements />
				<WhatPeopleSay />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
