//REACT
import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import Article1 from "../../../components/Articles/Article1";
import Article2 from "../../../components/Articles/Article2";
import Article3 from "../../../components/Articles/Article3";
import Article4 from "../../../components/Articles/Article4";
import Article5 from "../../../components/Articles/Article5";
import Article6 from "../../../components/Articles/Article6";
import Article7 from "../../../components/Articles/Article7";
import Article8 from "../../../components/Articles/Article8";
import Article9 from "../../../components/Articles/Article9";
import Article10 from "../../../components/Articles/Article10";

/* STYLE */
import "./styles.css"


const SlideDeck = () => {

  return (
    <div className="slidedeck-container">
      <div className="slide-container frontpage">
          <Article1/>
      </div>
      <div id="firstslide" className="slide-container" >
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
      <Article10/>
    </div>
  )
};

export default SlideDeck


/*
<div className="slidedeck-container">
      <div className="slide-container frontpage">
          <Article1/>
      </div>
      <div id="firstslide" className="slide-container" >
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
      <Article10/>
    </div>
    */