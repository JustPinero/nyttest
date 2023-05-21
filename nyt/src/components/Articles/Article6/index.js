/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
/* STYLING */
import "./styles.css";
/* COPY */
import {Article6Copy} from "./Copy"
/* IMAGES */
import Skull from "../../../assets/photos/Article6/NYT_Understanding_LP_Still_Chewing 1.png";

const Article6 = ()=>{
    return (
        <div className='article-container'>
            <div>
                <ArticleLink articleData={Article6Copy} />
                <img src={"https://mwcm.nyt.com/dam/LP/brand/life/images/10_NFA_LP_Video_Chewing.gif"}/>
            </div>

        </div>
    )
}

export default Article6;