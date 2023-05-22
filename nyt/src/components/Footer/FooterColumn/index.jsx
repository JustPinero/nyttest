/* REACT */
import React from 'react'
/* CUSTOM COMPONENTS */

/* STYLING */
import "./styles.css";

const FooterColumn = ({label, footerLinks})=>{
    return (
        <div className='footercolumn-container'>
            <p className="footercolumn-label">{label}</p>
            <div>
                {footerLinks?
                    footerLinks.map((footerLink)=>(
                        <a href={footerLink.url} target="_blank"><p className="footercolumn-link">{footerLink.text}</p></a>
                    ))
                    :null
                }
            </div>
        </div>
    )
}

export default FooterColumn;