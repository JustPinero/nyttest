/* REACT */
import React from 'react'
//STYLING
import "./styles.css";
//Non-Mobile Splash Page
const Article2 = ({articleData})=>{
    const {header, subheader, author, date} = articleData;
    return (
        <div className='articlelink-container'>
            <p className="articlelink-header">{header}</p>
            <p className="articlelink-subheader">{subheader}</p>
            <p className="articlelink-author">{author}</p>
            <p className="articlelink-date">{date}</p>
        </div>
    )
}

export default Article2