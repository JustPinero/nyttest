/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
/* STYLING */
import "./styles.css";
/* COPY */
import {Article3Copy} from "./Copy"
/* IMAGES */
import Blur from "../../../assets/photos/Article3/mokrimidnightbball110 2.png";
import Ball from "../../../assets/photos/Article3/image 596.png";

const Article3 = ()=>{
    return (
        <div className='article-container'>
            <div className="article-section">
                <div className="blur-container">
                    <img className="blur-image" src={Blur} alt="basketball players in a game blurred for the effect of speed" />
                </div>
            </div>
            <div className="article-section">
                <div className="article-row">
                    <div className="link-container">
                        <ArticleLink articleData={Article3Copy} />
                    </div>
                    <div className="ball-container">
                        <img className="ball-image" alt="player dribbling basketball" src={Ball}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article3