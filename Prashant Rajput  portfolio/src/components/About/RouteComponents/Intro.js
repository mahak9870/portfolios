import React from 'react';
import '../../../styles/About/Route/Intro.scss';
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right' >I am <span>Prashant Rajput</span></p>
                        <p data-aos='fade-right' data-aos-delay='200'>I enjoy building websites and always enthusiastic about creating new full-stack features.
                         I am from Bijnor, UP, India. my b-tech (computer science engineering) was completed in 2022, and I graduated from Dr APJ Abdul Kalam  
                         University, Lucknow, Uttar Prasdesh .
                         I have knowledge Python , Html, CSS , React , JavaScript SQL, and Basic Networking. My strengths are self-motivation, quick learning,
                         and being a hardworking person. My hobbies are playing cricket and badminton. that is all about me Thank you
                        
                        </p>
                         

                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro