//REACT
import React, { Children } from 'react'
/* CUSTOM COMPONENTS */
//ARTICLES
import Article1 from "../../components/Articles/Article1";
import Article2 from "../../components/Articles/Article2";
import Article3 from "../../components/Articles/Article3";
import Article4 from "../../components/Articles/Article4";
import Article5 from "../../components/Articles/Article5";
import Article6 from "../../components/Articles/Article6";
import Article7 from "../../components/Articles/Article7";
import Article8 from "../../components/Articles/Article8";
import Article9 from "../../components/Articles/Article9";


const ArticleGallery = ()=>{
    return(
        <div className="main-container">
            <div className="scroll-container">
                <Article1/>
                <Article2/>
                <Article3/>
                <Article4/>
                <Article5/>
                <Article6/>
                <Article7/>
                <Article8/>
                <Article9/>
            </div>
        </div>
    )
}

export default ArticleGallery