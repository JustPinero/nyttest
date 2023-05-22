//REACT
import React from 'react'
//STYLING
import "./styles.css";
//COPY
import {Article1Copy} from "./Copy"
//IMAGES
import NYTLOGO from "../../../assets/logos/NYTLOGO.png"

//
const FrontPage = ()=>{
    return (
        <div className='frontPage-container'>
            <div className="frontPage-header_container">
                <img className="frontPage-header-logo" alt='The New York Times Logo' src={NYTLOGO}/>
            </div>
            <div className="frontPage-body">
                <p className="frontPage-body_text">{Article1Copy.text1}</p>
            </div>
            <div className="frontPage-footer_container">
                <p className="frontPage-footer_text">{Article1Copy.text2}</p>
            </div>
        </div>
    )
}

export default FrontPage;