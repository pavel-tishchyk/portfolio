import React from 'react';
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faInfo } from '@fortawesome/free-solid-svg-icons';

const getProjectTypeName = (type) => {
  switch(type) {
    case 'web': 
      return 'Web Application'
    case 'mobile': 
      return 'Mobile Application'
    case 'design': 
      return 'Web Design'
    default:
      return 'Application' 
  }
}

const PortfolioItem = ({ onClick, id, images, name, type, delay }) => {
  return (
    <Fade bottom opposite delay={delay}>
      <Card onClick={() => onClick(id)} >
        <Card.Img src={require(`../../images/projects/${images[0]}`)}/>
        <Card.Body>
          <FontAwesomeIcon icon={faInfo}/>
          <FontAwesomeIcon icon={faSearch}/>
          <h5 className='title'>{name}</h5>
          <span className='sub-title'>{getProjectTypeName(type)}</span>
        </Card.Body>
      </Card>
    </Fade>
  );
}

export default PortfolioItem;
