/* REACT */
import React from 'react';
/* STYLING */
import "./styles.css";

const ArticleFrame = ({children})=>{
    return (
        <div className='articleframe-container'>
            {children}
        </div>
    )
}

export default ArticleFrame