import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

const ServiceItem = ({ delay, title, text, icon, className }) => (
  <Col sm={4}>
    <Fade bottom opposite delay={delay}>
      <div className='service-item'>
        <FontAwesomeIcon 
          className={className}
          icon={icon} 
        />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Fade>
  </Col>
);

export default ServiceItem;
