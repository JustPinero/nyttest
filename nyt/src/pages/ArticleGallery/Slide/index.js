//REACT
import React from "react";
/* STYLE */
import "./styles.css"

const Slide = ({children}) => {
  return (
    <div className="slide-container">
        {children}
    </div>
  )
};

export default Slide