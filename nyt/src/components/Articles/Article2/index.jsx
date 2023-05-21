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

//Non-Mobile Splash Page
const Article2 = ()=>{
    return (
        <div className='article-container'>
            <div>
                <img src={Sneaker}/>
            </div>
            <div>
                <ArticleLink articleData={Article2Copy} />
            </div>
        </div>
    )
}

export default Article2