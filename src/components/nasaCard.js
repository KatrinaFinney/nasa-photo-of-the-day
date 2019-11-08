import React from "react";

const NasaCard = props => {
  return (
    <div className="nasa-info">
        
      
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
      <div className="bottom">
        <p>Copyright: {props.copyright}</p>
        <p>Date: {props.date}</p>
      </div>
    </div>
  );
};
export default NasaCard;