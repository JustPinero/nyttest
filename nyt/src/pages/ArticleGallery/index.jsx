//REACT
import React, { useRef, useState, useLayoutEffect, useCallback,Fragment } from "react";
//ANIMATION LIBRARIES
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
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
import Article10 from "../../components/Articles/Article10";
/* STYLE */
import "./styles.css"


const ArticleGallery = () => {

  return (
    <div className="carousel-container">
      <Controller >
            <Scene 
                loglevel={3}
                triggerHook="onLeave"
                duration="400%"
                pin
            >
                        <Tween     
                            from={{ x: '0%' }}
                            to={{ x: '-100%'}}>
                            <div className="slidedeck-container">
                                <div className="slide-container frontpage">
                                    <Article1/>
                                </div>
                                <div id="firstslide" className="slide-container" style={{backgroundColor:"green"}}>
                                    <Article2/>
                                </div>
                                <div className="slide-container" >
                                    <Article3/>
                                </div>
                                <div className="slide-container" >
                                    <Article4/>
                                </div>
                                <div className="slide-container" >
                                    <Article5/>
                                </div>
                                <div className="slide-container">
                                    <Article6/>
                                </div>
                                <div className="slide-container">
                                    <Article7/>
                                </div> 
                                <div className="slide-container">
                                    <Article8/>
                                </div>
                                <div className="slide-container">
                                    <Article9/>
                                </div>
                                <div className="slide-container">
                                    <Article10/>
                                </div>
                        </div>
                    </Tween>
            </Scene>
        </Controller>
    </div>
  )
};

export default ArticleGallery

{/* <div className="article-container">
<Article1/>
<Article2/>
<Article3/>
<Article4/>
<Article5/>
<Article6/>
<Article7/>
<Article8/>
<Article9/>
<Article10/>
</div> */}

// <Timeline 
// wrapper={<div id="pinContainer"></div>}
// >
// <Tween
//     from={{ x: '0%' }}
//     to={{ x: '-100%' }}
// >
//     <Article1/>
// </Tween>
// <Tween from={{ x: '0%' }}
//     to={{ x: '-100' }}
// >
//     <Article2/>
// </Tween>
// <Tween from={{ x: '-100%' }}
//     to={{ x: '0%' }}
// >
//     <Article3/>
// </Tween>
// <Tween from={{ x: '0%' }}
//     to={{ x: '-100%' }}
// >
//     <Article4/>
// </Tween>
// <Tween from={{ x: '0%' }}
//     to={{ x: '-100%' }}
// >
//     <Article5/>
// </Tween>
// <Tween from={{ x: '0%' }}
//     to={{ x: '-100%' }}
// >
//     <Article6/>
// </Tween>
// <Tween from={{ x: '0%' }}
//     to={{ x: '-100%' }}
// >
//     <Article7/>
// </Tween>
// <Tween from={{ x: '0%' }}
//     to={{ x: '-100%' }}
// >
//     <Article8/>
// </Tween>
// <Tween from={{ x: '0%' }}
//     to={{ x: '-100%' }}
// >
//     <Article9/>
// </Tween>
// <Tween from={{ x: '0%' }}
//     to={{ x: '-100%' }}
// >
//     <Article10/>
// </Tween>
// </Timeline>


//SEMI FUNCTIONING CAROUSEL

// <Controller >
// <Scene 
//     triggerHook="onLeave"
//     duration="400%"
//     offset={100}
//     pin
// >
//         <Timeline
//             wrapper={<div id="deck-container"/>} 
//         >
//                 <Tween
//                     from={{ x: '0%', opacity:"1" }}
//                     to={{ x: '-90%', opacity:"0" }}
//                 >   
//                     <div className="slide-container">
//                         <Article1/>
//                     </div>
//                 </Tween>
//                 <Tween
//                     from={{ x: '100%' }}
//                     to={{ x: '-110%' }}
//                 >   
//                     <div className="slide-container">
//                         <Article2/>
//                     </div>
//                 </Tween>
//                 <Tween
//                     from={{ x: '100%' }}
//                     to={{ x: '-110%' }}
//                 >   
//                     <div className="slide-container">
//                         <Article3/>
//                     </div>
//                 </Tween>
//                 <Tween
//                     from={{ x: '100%' }}
//                     to={{ x: '-110%' }}
//                 >   
//                     <div className="slide-container">
//                         <Article4/>
//                     </div>
//                 </Tween>
//                 <Tween
//                     from={{ x: '100%' }}
//                     to={{ x: '-110%' }}
//                 >   
//                     <div className="slide-container">
//                         <Article5/>
//                     </div>
//                 </Tween>
//                 <Tween
//                     from={{ x: '100%' }}
//                     to={{ x: '-110%' }}
//                 >   
//                     <div className="slide-container">
//                         <Article6/>
//                     </div>
//                 </Tween>
//                 <Tween
//                     from={{ x: '100%' }}
//                     to={{ x: '-110%' }}
//                 >   
//                     <div className="slide-container">
//                         <Article7/>
//                     </div>
//                 </Tween>
//                 <Tween
//                     from={{ x: '100%' }}
//                     to={{ x: '-110%' }}
//                 >   
//                     <div className="slide-container">
//                         <Article8/>
//                     </div>
//                 </Tween>
//                 <Tween
//                     from={{ x: '100%' }}
//                     to={{ x: '-110%' }}
//                 >   
//                     <div className="slide-container">
//                         <Article9/>
//                     </div>
//                 </Tween>
//                 <Tween
//                     from={{ x: '100%' }}
//                     to={{ x: '0%' }}
//                 >   
//                     <div className="slide-container">
//                         <Article10/>
//                     </div>
//                 </Tween>
//     </Timeline>
// </Scene>
// </Controller>