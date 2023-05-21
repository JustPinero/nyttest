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
            <div className="header-logo">
                <img src={NYTLOGO}/>
            </div>
            <div className="article-body">
                <p>{Article1Copy.text}</p>
            </div>
        </div>
    )
}

export default FrontPage