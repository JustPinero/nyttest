//REACT
import React from 'react'
//STYLING
import "./styles.css";
//COPY
import {Article1Copy} from "./Copy"
//IMAGES
import NYTLOGO from "../../../assets/logos/NYTLOGO.png"

//Non-Mobile Splash Page
const FrontPage = ()=>{
    return (
        <div className='article-container'>
            <div className="header-container">
                <img className="header-logo" alt='The New York Times Logo' src={NYTLOGO}/>
            </div>
            <div className="article-body">
                <p className="article-body_text">{Article1Copy.text1}</p>
            </div>
            <div className="footer-container">
                <p className="footer-text">{Article1Copy.text2}</p>
            </div>
        </div>
    )
}

export default FrontPage;