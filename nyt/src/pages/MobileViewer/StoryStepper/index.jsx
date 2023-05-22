/* REACT */
import React, { Component } from 'react';
//IG
import Stories from 'react-insta-stories';
//ARTICLES
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


const MobileViewer = () => {
    const stories = [{content:Article1}, {content:Article2},{content:Article3}, {content:Article4}, {content:Article5}, {content:Article5}, {content:Article6}, {content:Article7}, {content:Article8}, {content:Article9}, {content:Article10}]
	return (
		<Stories
            loop={true}
            isPaused={true}
            keyboardNavigation={true}
            width="100%"
            height="100%"
			stories={stories}
			defaultInterval={1000000}
		/>
	);
};

export default MobileViewer