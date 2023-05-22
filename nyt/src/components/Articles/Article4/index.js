/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
/* STYLING */
import "./styles.css";
/* COPY */
import {Article4ACopy, Article4BCopy} from "./Copy"
/* IMAGES */
import PlayerShot from "../../../assets/photos/Article4/GettyImages-89405068 1.png";
import GameShot from "../../../assets/photos/Article4/GettyImages-640699820 1.png";

const Article4 = ()=>{
    return (
        <div className='article-container'>
            <div className="article-section">
                <div className="article-row">
                    <div className="article4A-container">
                        <ArticleLink articleData={Article4ACopy} />
                    </div>
                    <img className="gameshot-image" alt="UCLA basketball player attempting dunk during game" src={GameShot}/>
                </div>
            </div>
            <div className="article-section">
                <div className="article-row">
                    <div className="player-container">
                        <img className="player-image" alt="Kareem Abdul-Jabbar" src={PlayerShot}/>
                    </div>
                    <div className="article4B-container">
                        <ArticleLink articleData={Article4BCopy} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article4