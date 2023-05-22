/* REACT */
import React from 'react';
/* STYLING */
import "./styles.css";

const ArticleRow = ({children})=>{
    return (
        <div className='articlerow-container'>
            {children}
        </div>
    )
}

export default ArticleRow