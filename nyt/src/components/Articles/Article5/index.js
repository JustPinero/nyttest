/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
/* STYLING */
import "./styles.css";
/* COPY */
import {Article5ACopy, Article5BCopy} from "./Copy"
/* IMAGES */
import FlamingBackground from "../../../assets/photos/Article5/Changing-World 1.png";
import Evolution from "../../../assets/photos/Article5/NYT_Understanding_LP_Still_Human Evolution.png";
import Plane from "../../../assets/photos/Article5/planefade-1920-LP 1.png";
import Running from "../../../assets/photos/Article5/NYT_Understanding_LP_Still_Running.png";

const Article5 = ()=>{
    return (
        <div className='article-container'>
            <img src="https://mwcm.nyt.com/dam/mkt_assets/oma_brand_lp/Changing-World-nyt.gif" />
            <div>
                <ArticleLink articleData={Article5ACopy} />
                <ArticleLink articleData={Article5BCopy} />
                <img src={"https://mwcm.nyt.com/dam/LP/brand/life/images/08_NFA_LP_Video_Running.gif"}/>
            </div>
            <div>
            <img id="FlyImg" className="css-w9zr22" src="https://mwcm.nyt.com/dam/mkt_assets/oma_brand_lp/planefade-1920-LP_2_rd.gif" alt="Flying Aircraft" />
                <img src={"https://mwcm.nyt.com/dam/LP/brand/life/images/09_NFA_LP_Video_Human_Evolution.gif"}/>
            </div>
        </div>
    )
}

export default Article5