import '../styles/Shared.css';

const HeaderAndSubheader = (props) => {
	let style = (props.styling) ? props.styling : {};
	let headerStyle = (props.headerStyling) ? props.headerStyling : {};
	let subheaderStyle = (props.subheaderStyling) ? props.subheaderStyling : {};

	return (
        <>
			<div className="solid-header" style={style}>
				<h1 style={headerStyle}>{props.header}</h1>
			</div>
            <div className="solid-subheader">
                <p style={subheaderStyle}>{props.subheader}</p>
            </div>
		</>
	);
};

export default HeaderAndSubheader;