/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleFrame from '../../ArticleFrame';
import ArticleLink from "../../ArticleLink";
/* STYLING */
import "./styles.css";
/* COPY */
import {Article8Copy} from "./Copy"
/* IMAGES */
const GumBackground="https://mwcm.nyt.com/dam/LP/brand/life/images/12_NFA_LP_Video_Street.gif"

const Article8 = ()=>{
    return (
        <ArticleFrame>
            <div className="article8-container">
                <img className="gumbackground-image" src={GumBackground} alt="gum on a sidewalk"/>
                <div className="article8-text">
                    <ArticleLink articleData={Article8Copy} />
                </div>
            </div>
        </ArticleFrame>
    )
}

export default Article8;