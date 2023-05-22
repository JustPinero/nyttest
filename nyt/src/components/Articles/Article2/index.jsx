/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
//STYLING
import "./styles.css";
//COPY
import {Article2Copy} from "./Copy"
//IMAGES
import Sneaker from "../../../assets/photos/Article2/AirJordan1OGBred1985_ChrisKarges1000px Chris Karges 1.png";

const Article2 = ()=>{
    return (
        <div className='article-container'>
            <div className="article-section">
                <div className="sneaker-container">
                    <img className="sneaker-image" alt="air jordan sneaker" src={Sneaker}/>
                </div>
                <div className="article-text_container">
                    <ArticleLink articleData={Article2Copy} />
                </div>
            </div>
        </div>
    )
}

export default Article2