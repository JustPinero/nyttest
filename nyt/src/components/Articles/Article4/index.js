/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
import ArticleFrame from '../../ArticleFrame';
import ArticleRow from '../../ArticleRow';
/* STYLING */
import "./styles.css";
/* COPY */
import {Article4ACopy, Article4BCopy} from "./Copy"
/* IMAGES */
import PlayerShot from "../../../assets/photos/Article4/GettyImages-89405068 1.png";
import GameShot from "../../../assets/photos/Article4/GettyImages-640699820 1.png";

const Article4 = ()=>{
    return (
        <ArticleFrame>
            <div className="article4-container">
                <div className="article-section">
                    <ArticleRow>
                        <div className="article4A-container">
                            <ArticleLink articleData={Article4ACopy} />
                        </div>
                        <img className="gameshot-image" alt="UCLA basketball player attempting dunk during game" src={GameShot}/>
                    </ArticleRow>
                </div>
                <div className="article-section">
                    <ArticleRow>
                        <div className="player-container">
                            <img className="player-image" alt="Kareem Abdul-Jabbar" src={PlayerShot}/>
                        </div>
                        <div className="article4B-container">
                            <ArticleLink articleData={Article4BCopy} />
                        </div>
                    </ArticleRow>
                </div>
            </div>
        </ArticleFrame>
    )
}

export default Article4