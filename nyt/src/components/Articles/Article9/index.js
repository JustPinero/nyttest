/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
import ArticleFrame from '../../ArticleFrame';
/* STYLING */
import "./styles.css";
/* COPY */
import {Article9Copy} from "./Copy"
/* IMAGES */
import WrappedSneaker from "../../../assets/photos/Article9/60_NewYorkTimes_Sneakers_Offline_CoreEdit_04_10_6PM_SHRINK_WRAP.png";

const Article9 = ()=>{
    return (
        <ArticleFrame>
            <div className="article9-container">
                <div className="article9-text">
                    <ArticleLink articleData={Article9Copy} />
                </div>
                <img className="wrappedsneaker-image" src={WrappedSneaker} alt="sneaker wrapped in plastic bag" />
            </div>
        </ArticleFrame>
    )
}

export default Article9;