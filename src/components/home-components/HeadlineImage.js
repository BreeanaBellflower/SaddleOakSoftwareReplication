import '../../styles/Home.css';

const HeadlineImage = () => {
    return <>
            <div id="home-image-container">
                <img alt="" src="https://static.wixstatic.com/media/d6d7da_e0d9913f7243423f981e34d1cd2284a7~mv2.jpg/v1/fill/w_1177,h_837,al_c,q_85/d6d7da_e0d9913f7243423f981e34d1cd2284a7~mv2.webp" id="home-page-image"/>
            </div>
            <div id="home-headline">
                <span>Creating solutions for small businesses</span>
                <hr/>
                <span className="sub-header">...like yours</span>    
            </div>
        </>
}

export default HeadlineImage;