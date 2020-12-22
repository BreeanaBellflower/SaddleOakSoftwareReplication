import { useEffect } from 'react';
import '../styles/Careers.css';
import Footer from './Footer';
import HeaderAndSubheader from './HeaderAndSubheader';

const Careers = () => {
	useEffect(() => {
		document.title = 'Saddle Oak Software | Careers';
	});

	return (
		<div id="page-container">
			<div id="background-image" className="careers-background">
				<img
					id="careers-background"
					src={process.env.PUBLIC_URL + '/images/careers.webp'}
					alt="products background"
				/>
			</div>
			<div id="careers-content">
				<HeaderAndSubheader
					header="CAREERS"
					subheader="Why choose Saddle Oak Software?"
					headerStyling={{ fontSize: '70px', paddingBottom: '20px' }}
					subheaderStyling={{ fontSize: '35px', fontWeight: 400 }}
				/>
				<div id="career-details">
					<p>
						We're a small - and rapidly growing - software company dedicated to making the best products
						possible for very small businesses. We believe in hiring talented, hardworking people, and
						treating them well. We foster a relaxed atmosphere, with the flexibility to work from home.
					</p>
					<ul>
						<li>Insurance? You bet!</li>
						<li>Unlimited vacation time? Definitely.</li>
						<li>Retirement plan? Of course.</li>
					</ul>
				</div>
				<h1>Current Job Openings:</h1>
				<h1>
					<a href="https://071ce2a8-1d87-4898-af96-c7713306dcea.filesusr.com/ugd/d6d7da_4b197897286e486cbd8461b07b4b3ce0.pdf">
						Software Engineer
					</a>
				</h1>
				<br />
				<div id="career-details">
					<p>
						We're always looking for great people, so feel free to email your resume and a brief bit about
						yourself to <a href="mailto:hr@saddleoak.com">hr@saddleoak.com</a>.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Careers;
