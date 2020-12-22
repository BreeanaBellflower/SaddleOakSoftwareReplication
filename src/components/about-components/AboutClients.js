import '../../styles/AboutUs.css';

const AboutClients = () => {
	return (
		<div id="about-clients-grid">
			<div className="about-grid-item">
				<img src={process.env.PUBLIC_URL + '/images/New Deal cropped.webp'} alt="New Deal Distillery" />
			</div>
			<div className="about-grid-item">
				<img src={process.env.PUBLIC_URL + '/images/Total Gym_edited_edited_edited.webp'} alt="Total Gym" />
			</div>
			<div className="about-grid-item">
				<img src={process.env.PUBLIC_URL + '/images/alive studios cropped.webp'} alt="Alive Studios" />
			</div>

			<div className="about-grid-item">
				<img src={process.env.PUBLIC_URL + '/images/firefly-logo-cropped.webp'} alt="Firefly" />
			</div>
			<div className="about-grid-item">
				<img src={process.env.PUBLIC_URL + '/images/Kardiel.webp'} alt="Kardiel" />
			</div>
			<div className="about-grid-item">
				<img src={process.env.PUBLIC_URL + '/images/beatbox cropped.webp'} alt="BeatBox Beverages" />
			</div>

			<div className="about-grid-item">
				<img src={process.env.PUBLIC_URL + '/images/Etkie.webp'} alt="Etkie" />
			</div>
			<div className="about-grid-item">
				<img src={process.env.PUBLIC_URL + '/images/CMM cropped.webp'} alt="Chef Minute Meals" />
			</div>
			<div className="about-grid-item">
				<img src={process.env.PUBLIC_URL + '/images/CTC Cropped.webp'} alt="CTC" />
			</div>
		</div>
	);
};

export default AboutClients;
