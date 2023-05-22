/* REACT */
import React, { Component } from 'react';

import StoryStepper from "./StoryStepper";
import "./styles.css"
import Logo from "../../assets/logos/NYTLOGO.png"

const MobileViewer = () => {
	return (
        <div className='mobile-frame'>
            <div className="mobile-header">
                <img className src={Logo} alt="NYT Logo" />
            </div>
            <div className="mobile-body">
                <StoryStepper/>
            </div>
        </div>
	);
};

export default MobileViewer