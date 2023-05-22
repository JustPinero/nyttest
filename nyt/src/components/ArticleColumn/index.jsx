/* REACT */
import React from 'react';
/* STYLING */
import "./styles.css";

const ArticleColumn = ({children})=>{
    return (
        <div className='articlecolumn-container'>
            {children}
        </div>
    )
}

export default ArticleColumn;