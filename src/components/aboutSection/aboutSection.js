import React from 'react';
import {Link} from 'react-router-dom';

import './aboutSection.scss';

const AboutSection = () => {
    return (
        <div className="aboutSection">
            <h2 className="aboutSection__title">About us</h2>
            <p className="aboutSection__lead">
            Samsung was founded by Lee Byung-chul in 1938 as a trading company. Over the next three decades, the group diversified into areas including food processing, textiles, insurance, securities, and retail. Samsung entered the electronics industry in the late 1960s and the construction and shipbuilding industries in the mid-1970s... 
            </p>
            <Link className="aboutSection__link" to="about/">Read more</Link>
        </div>
    )
}

export default AboutSection;