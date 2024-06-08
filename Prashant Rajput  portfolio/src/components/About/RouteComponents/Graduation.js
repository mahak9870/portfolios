import React from 'react';


import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../styles/About/Route/Graduation.scss';

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ngineering</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1> kunwar satya vira college of engineering and management Bijnor.</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;01/08/2018 - 31/07/2022</h2>
                        <p>  B.Tech in Computer Science Engineering from 'kunwar satya vira college of engineering and management'.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graduation