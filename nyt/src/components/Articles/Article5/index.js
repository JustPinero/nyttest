/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */
import ArticleLink from "../../ArticleLink";
import ArticleFrame from '../../ArticleFrame';
import ArticleRow from '../../ArticleRow';
import ArticleColumn from "../../ArticleColumn"
/* STYLING */
import "./styles.css";
/* COPY */
import {Article5ACopy, Article5BCopy, Article5CCopy, Article5DCopy} from "./Copy"
/* IMAGES */
import FlamingBackground from "../../../assets/photos/Article5/Changing-World 1.png";
import Evolution from "../../../assets/photos/Article5/NYT_Understanding_LP_Still_Human Evolution.png";
import Plane from "../../../assets/photos/Article5/planefade-1920-LP 1.png";
import Running from "../../../assets/photos/Article5/NYT_Understanding_LP_Still_Running.png";

const Article5 = ()=>{
    return (
        <ArticleFrame>
            <img className="flaming-background" alt="a wildfire" src="https://mwcm.nyt.com/dam/mkt_assets/oma_brand_lp/Changing-World-nyt.gif" />
            <div className="article5-container">
                <ArticleRow>
                    <ArticleColumn>
                        <div className="article5a-container">
                            <ArticleLink articleData={Article5ACopy} />
                        </div>
                        <img id="FlyImg" className="css-w9zr22" src="https://mwcm.nyt.com/dam/mkt_assets/oma_brand_lp/planefade-1920-LP_2_rd.gif" alt="Flying Aircraft" />
                    </ArticleColumn>
                    <ArticleColumn>
                        <div className="article5b-container">
                            <ArticleLink articleData={Article5BCopy} />
                        </div>
                        <div className="article5d-container">
                            <ArticleLink articleData={Article5DCopy} />
                        </div>
                    </ArticleColumn>
                    <ArticleColumn>
                        <div className="article5c-container">
                            <ArticleLink articleData={Article5CCopy} />
                            <img className="running-image" alt="human running" src={"https://mwcm.nyt.com/dam/LP/brand/life/images/08_NFA_LP_Video_Running.gif"}/>
                        </div>
                        <img className="evolution-image" alt="Ancient Runner" src={"https://mwcm.nyt.com/dam/LP/brand/life/images/09_NFA_LP_Video_Human_Evolution.gif"}/>
                    </ArticleColumn>
                </ArticleRow>
            </div>
        </ArticleFrame>
    )
}

export default Article5