/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
/* STYLING */
import "./styles.css";
/* COPY */
import {Article8Copy} from "./Copy"
/* IMAGES */
import GumBackground from "../../../assets/photos/Article8/60_NewYorkTimes_Sneakers_Offline_CoreEdit_04_10_6PM_Street.png";

const Article8 = ()=>{
    return (
        <div className='article-container'>
            <div>
                <img src={GumBackground}/>
                <ArticleLink articleData={Article8Copy} />
            </div>

        </div>
    )
}

export default Article8;