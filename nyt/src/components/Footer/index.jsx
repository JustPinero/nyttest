/* REACT */
import React, {useState} from 'react'
/* CUSTOM COMPONENTS */
import FooterColumn from './FooterColumn';
/* STYLING */
import "./styles.css";
/* ASSETS */
import Logo from "../../assets/logos/NYTLogoBlack.png"
/* COPY */
import FooterCopy from "./Copy"
const HelpColumnCopy = FooterCopy.Help;
const AboutColumnCopy = FooterCopy.About;


const Footer = ()=>{
    return (
        <div className='footer-container'>
            <div>
               <img src={Logo}/> 
               <p>
                We No Longer Sell Your Personal Information
               </p>
               <p>
                    California Notices
                </p>
                <p>
                    Limit the Use of My Sensitive Information
                </p>
            </div>
            <FooterColumn
                label={AboutColumnCopy.label}
                footerLinks={AboutColumnCopy.links}
            />
            <FooterColumn
                label={HelpColumnCopy.label}
                footerLinks={HelpColumnCopy.links}
            />
        </div>
    )
}

export default Footer;