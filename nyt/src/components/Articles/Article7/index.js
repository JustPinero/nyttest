/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
/* STYLING */
import "./styles.css";
/* COPY */
import {Article7Copy} from "./Copy"
/* IMAGES */
import GumInWrapper from "../../../assets/photos/Article7/60_NewYorkTimes_Sneakers_Offline_CoreEdit_04_10_6PM_GUMINWRAPPER.png";

const Article7 = ()=>{
    return (
        <div className='article-container'>
            <div>
                <ArticleLink articleData={Article7Copy} />
                <img className="css-261mrm" src="https://mwcm.nyt.com/dam/LP/brand/life/images/11_NFA_LP_Video_Gum.gif" alt="Chewing Gum"/>
            </div>

        </div>
    )
}

export default Article7;