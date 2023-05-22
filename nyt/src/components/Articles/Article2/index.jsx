/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleFrame from "../../ArticleFrame"
import ArticleLink from "../../ArticleLink";
//STYLING
import "./styles.css";
//COPY
import {Article2Copy} from "./Copy"
//IMAGES
import Sneaker from "../../../assets/photos/Article2/AirJordan1OGBred1985_ChrisKarges1000px Chris Karges 1.png";

const Article2 = ()=>{
    return (
        <ArticleFrame>
            <div className="article2-container">
                <div className="mobile-banner">
                   <h5 className="mobile-banner_text"> If you understand <a><span> Sneakers</span></a>, </h5>
                </div>
                <div className="sneaker-container">
                    <img className="sneaker-image" alt="air jordan sneaker" src={Sneaker}/>
                </div>
                <div className="article2-text">
                    <ArticleLink articleData={Article2Copy} />
                </div>
            </div>
        </ArticleFrame>
    )
}

export default Article2