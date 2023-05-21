/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
/* STYLING */
import "./styles.css";
/* COPY */
import {Article4ACopy, Article4BCopy} from "./Copy"
/* IMAGES */
import GameShot from "../../../assets/photos/Article4/GettyImages-89405068 1.png";
import PlayerShot from "../../../assets/photos/Article4/GettyImages-640699820 1.png";

const Article4 = ()=>{
    return (
        <div className='article-container'>
            <div>
                <ArticleLink articleData={Article4ACopy} />
                <img src={GameShot}/>
            </div>
            <div>
                <img src={PlayerShot}/>
                <ArticleLink articleData={Article4BCopy} />
            </div>
        </div>
    )
}

export default Article4