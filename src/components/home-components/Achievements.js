import { useState, useEffect } from 'react';
import '../../styles/Home.css';

const Achievements = () => {
	const [ iconSize, setIconSize ] = useState(
		window.innerWidth <= 768 ? { outerSize: '100', innerSize: '50' } : { outerSize: '200', innerSize: '100' }
	);

	useEffect(() => {
		window.addEventListener('scroll', sizeHandler);
		return () => {
			window.removeEventListener('scroll', sizeHandler);
		};
	}, []);

	const sizeHandler = () => {
		if (window.innerWidth <= 768) {
			setIconSize({ outerSize: '100', innerSize: '50' });
		} else {
			setIconSize({ outerSize: '200', innerSize: '100' });
		}
	};

	return (
		<div className="why-we-are-different">
			<h2>WHY WE'RE DIFFERENT</h2>
			<div className="achievement-card">
				<div className="achievement-icon">
					<svg
						preserveAspectRatio="none"
						data-bbox="20 20 160 160"
						viewBox="20 20 160 160"
						height={iconSize.outerSize}
						width={iconSize.outerSize}
						xmlns="http://www.w3.org/2000/svg"
						data-type="shape"
						role="img"
					>
						<g>
							<path d="M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z" />
						</g>
					</svg>
					<svg
						preserveAspectRatio="xMidYMid meet"
						data-bbox="23.5 23.5 153 152.999"
						viewBox="23.5 23.5 153 152.999"
						height={iconSize.innerSize}
						width={iconSize.innerSize}
						xmlns="http://www.w3.org/2000/svg"
						data-type="color"
						role="img"
					>
						<g>
							<path
								d="M57.671 34.013c2.802 0 5.998 1.02 8.46 4.693 6.633 9.883 13.03 19.193 16.572 25.532 1.199 2.151 2.363 8.239-1.553 12.646-3.381 3.798-6.364 4.73-8.165 7.504-1.235 1.912-2.646 6.184-.325 11.096 2.776 5.867 6.162 10.685 13.592 18.234 7.547 7.421 12.364 10.804 18.242 13.581 1.918.905 3.742 1.241 5.363 1.241 2.532 0 4.574-.816 5.735-1.566 2.776-1.799 3.71-4.78 7.511-8.161 2.292-2.033 5.034-2.696 7.443-2.696 2.231 0 4.177.57 5.207 1.148 6.342 3.536 15.657 9.931 25.549 16.558 6.938 4.649 4.408 11.913 3.431 14.196-.982 2.284-6.004 9.841-16.805 15.491-2.972 1.553-6.893 2.476-11.648 2.476-14.968 0-38.155-9.16-65.66-36.651-36.237-36.217-40.635-64.946-34.188-77.26 5.651-10.798 13.213-15.818 15.5-16.795 1.074-.462 3.25-1.267 5.739-1.267zm0-10.513c-4.111 0-7.658 1.158-9.908 2.13-4.45 1.896-13.862 8.598-20.651 21.572-8.484 16.206-4.132 49.387 36.071 89.566 34.585 34.568 60.642 39.731 73.097 39.731 6.301 0 11.86-1.237 16.522-3.674 12.956-6.777 19.673-16.176 21.598-20.661 4.489-10.497 1.645-21.118-7.239-27.075-1.525-1.02-3.036-2.035-4.522-3.034-8.235-5.536-16.013-10.766-21.758-13.972-2.808-1.57-6.577-2.477-10.331-2.479-5.495 0-10.484 1.848-14.427 5.348-2.618 2.327-4.251 4.482-5.442 6.054-.246.325-.552.73-.788 1.02h-.033c-.247 0-.54-.078-.87-.234-4.366-2.062-8.274-4.609-15.298-11.51-6.908-7.024-9.456-10.928-11.519-15.292-.191-.403-.24-.699-.237-.9.29-.235.698-.543 1.025-.79 1.574-1.191 3.729-2.82 6.053-5.43 6.654-7.492 6.45-18.339 2.884-24.745-3.234-5.787-8.505-13.615-14.088-21.903-.968-1.439-1.953-2.899-2.942-4.374C70.824 26.82 64.717 23.5 57.671 23.5z"
								data-color="1"
							/>
						</g>
					</svg>
				</div>
				<div className="achievement-details">
					<h4>STEADY GROWTH</h4>
					<div className="achievement-description">
						<p>
							We've been around since 2008, and had consistent, constant growth. And we're still growing!
						</p>
					</div>
				</div>
			</div>

			<div className="achievement-card achievement-card-reverse">
				<div className="achievement-icon">
					<svg
						preserveAspectRatio="none"
						data-bbox="20 20 160 160"
						viewBox="20 20 160 160"
						height={iconSize.outerSize}
						width={iconSize.outerSize}
						xmlns="http://www.w3.org/2000/svg"
						data-type="shape"
						role="img"
					>
						<g>
							<path d="M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z" />
						</g>
					</svg>
					<svg
						preserveAspectRatio="xMidYMid meet"
						data-bbox="40.5 42.5 119 115.001"
						viewBox="40.5 42.5 119 115.001"
						height={iconSize.innerSize}
						width={iconSize.innerSize}
						xmlns="http://www.w3.org/2000/svg"
						data-type="color"
						role="img"
					>
						<g>
							<path
								d="M149.46 73.135l-.159.173v75.764h-45.963v-38.043a164.404 164.404 0 0 1-8.438 4.534v33.51H48.939v-18.874c-2.796.427-5.612.78-8.439 1.052v26.25h117.24V63.286a218.86 218.86 0 0 1-8.28 9.849z"
								data-color="1"
							/>
							<path
								d="M149.138 42.5C130.152 69.147 94.627 105.906 40.5 111.871v8.487c37.688-3.914 72.527-22.698 100.864-54.434A214.631 214.631 0 0 0 159.5 42.5h-10.362z"
								data-color="1"
							/>
						</g>
					</svg>
				</div>
				<div className="achievement-details">
					<h4>RIDICULOUSLY GOOD SUPPORT</h4>
					<div className="achievement-description">
						<p>
							24/7 email support. Phone support during business hours. Oh, and when you call, a human
							answers. Every...Single...Time.
						</p>
					</div>
				</div>
			</div>

			<div className="achievement-card">
				<div className="achievement-icon">
					<svg
						preserveAspectRatio="none"
						data-bbox="20 20 160 160"
						viewBox="20 20 160 160"
						height={iconSize.outerSize}
						width={iconSize.outerSize}
						xmlns="http://www.w3.org/2000/svg"
						data-type="shape"
						role="img"
					>
						<g>
							<path d="M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z" />
						</g>
					</svg>
					<svg
						preserveAspectRatio="xMidYMid meet"
						data-bbox="27.5 24.5 145 151"
						viewBox="27.5 24.5 145 151"
						height={iconSize.innerSize}
						width={iconSize.innerSize}
						xmlns="http://www.w3.org/2000/svg"
						data-type="color"
						role="img"
					>
						<g>
							<path
								d="M166.82 92.908c-4.907-6.392-12.402-9.912-21.097-9.912h-15.146c6.23-13.612 6.442-33.453 1.485-45.221-3.609-8.563-9.786-13.275-17.398-13.275-2.065 0-4.226.362-6.425 1.067C97.378 29.064 96.97 37.703 96.61 45.321c-.525 11.074-1.32 27.359-29.535 48.386V83.144H27.5v90.882h39.575v-11.241c6.772 6.125 16.413 12.715 26.557 12.715h45.764c9.546 0 18.961-7.209 21.44-16.41l10.278-38.174c2.838-10.55 1.275-20.76-4.294-28.008zM56.546 163.515H38.029V93.66h18.518l-.001 69.855zm104.396-45.33l-10.278 38.176c-1.237 4.598-6.501 8.625-11.269 8.625H93.632c-9.948 0-21.633-11.478-26.557-17.341v-41.027c38.409-26.049 39.433-47.737 40.053-60.801.38-8.062.829-9.112 4.341-10.246 1.153-.371 2.23-.557 3.196-.557 3.193 0 5.778 2.302 7.69 6.838 5.25 12.462 2.515 34.824-5.228 42.724l-8.754 8.931h37.35c5.424 0 9.831 2.003 12.74 5.796 3.559 4.637 4.463 11.515 2.479 18.882z"
								data-color="1"
							/>
						</g>
					</svg>
				</div>
				<div className="achievement-details">
					<h4>GREAT PRICES</h4>
					<div className="achievement-description">
						<p>Powerful, easy to use solutions that won't break the bank.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Achievements;
