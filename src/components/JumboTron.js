import React from 'react';
import { Jumbotron } from 'reactstrap';


const Header= (props) => {
  return (
    <div>
      <Jumbotron style={{ width: "35rem", margin: "0 auto"}}>
      <div className="nasa-info">
          
        <img className="nasa-Image" alt="something beautiful" style={{ width: "30rem" ,}} src="https://apod.nasa.gov/apod/image/1911/m45astrograph.jpg" />
       

     
        {props.title}
        
      
    </div>
        
      </Jumbotron>
    </div>
  );
};

export default Header;
/*<h1 className="display-3">{props.copyright}</h1>
        <p className="lead">{props.explanation}</p>
    
        <p>{props.date}</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>*/