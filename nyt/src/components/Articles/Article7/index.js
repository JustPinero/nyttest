/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
import ArticleFrame from '../../ArticleFrame';
/* STYLING */
import "./styles.css";
/* COPY */
import {Article7Copy} from "./Copy"
/* IMAGES */
const GumInWrapper= "https://mwcm.nyt.com/dam/LP/brand/life/images/11_NFA_LP_Video_Gum.gif"

const Article7 = ()=>{
    return (
        <ArticleFrame>
            <div className="article7-container">
                <div className="article7-text" >
                    <ArticleLink articleData={Article7Copy} />
                </div>
                <img className="gumwrapper-image" src={GumInWrapper} alt="Chewing Gum"/>
            </div>
        </ArticleFrame>
    )
}

export default Article7;