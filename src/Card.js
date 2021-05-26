// my code sucks i know it and im sorry
import React, { useRef, useEffect } from "react";
function Card(props) {
  return (
        <div className="animat">
          <span className={`${props.visibility} wrapTagline`}>
            {props.text1}
            <span className="orangeSpan">{props.orange}</span>
            {props.text2}
          </span> 
        </div>
  );
}

export default Card;