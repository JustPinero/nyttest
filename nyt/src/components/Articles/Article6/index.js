/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
import ArticleFrame from '../../ArticleFrame';
/* STYLING */
import "./styles.css";
/* COPY */
import {Article6Copy} from "./Copy"
/* IMAGES */
const Skull = "https://mwcm.nyt.com/dam/LP/brand/life/images/10_NFA_LP_Video_Chewing.gif";

const Article6 = ()=>{
    return (
        <ArticleFrame>
            <div className="article6-container">
                <img className="skull-image" alt="skull chewing" src={Skull}/>
                <div className="article6-text">
                    <ArticleLink articleData={Article6Copy} />
                </div>
            </div>
        </ArticleFrame>
    )
}

export default Article6;