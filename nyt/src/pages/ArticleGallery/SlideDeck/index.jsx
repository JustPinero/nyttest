//REACT
import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


import Article2 from "../../../components/Articles/Article2";
import Article3 from "../../../components/Articles/Article3";
import Article4 from "../../../components/Articles/Article4";
import Article5 from "../../../components/Articles/Article5";
import Article6 from "../../../components/Articles/Article6";
import Article7 from "../../../components/Articles/Article7";
import Article8 from "../../../components/Articles/Article8";
import Article9 from "../../../components/Articles/Article9";

/* STYLE */
import "./styles.css"


const SlideDeck = () => {

  return (
    <div className="slidedeck-container">
                                    <Article2/>
                                    <Article3/>
                                    <Article4/>
                                    <Article5/>
                                    <Article6/>
                                    <Article7/>
                                    <Article8/>
                                    <Article9/>
                               
    </div>
  )
};

export default SlideDeck
