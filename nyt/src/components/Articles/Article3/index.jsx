/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
/* STYLING */
import "./styles.css";
/* COPY */
import {Article3Copy} from "./Copy"
/* IMAGES */
import Ball from "../../../assets/photos/Article3/mokrimidnightbball110 2.png";
import Blur from "../../../assets/photos/Article3/image 596.png";

const Article3 = ()=>{
    return (
        <div className='article-container'>
            <div>
                <img src={Blur}/>
            </div>
            <div>
                <ArticleLink articleData={Article3Copy} />
                <img src={Ball}/>
            </div>
        </div>
    )
}

export default Article3