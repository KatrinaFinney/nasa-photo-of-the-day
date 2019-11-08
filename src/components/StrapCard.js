import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';

const StrapCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://apod.nasa.gov/apod/image/1911/m45astrograph.jpg" alt="Beautiful Stars" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardSubtitle>{props.copyright}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default StrapCard;