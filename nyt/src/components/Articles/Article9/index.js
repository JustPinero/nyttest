/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
/* STYLING */
import "./styles.css";
/* COPY */
import {Article9Copy} from "./Copy"
/* IMAGES */
import WrappedSneaker from "../../../assets/photos/Article9/60_NewYorkTimes_Sneakers_Offline_CoreEdit_04_10_6PM_SHRINK_WRAP.png";

const Article9 = ()=>{
    return (
        <div className='article-container'>
            <div>
                <ArticleLink articleData={Article9Copy} />
                <img src={WrappedSneaker}/>
            </div>

        </div>
    )
}

export default Article9;