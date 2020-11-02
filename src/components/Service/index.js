import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { faBullseye, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import withSectionWrapper from '../../hocs/withSectionWrapper';
import ServiceItem from './ServiceItem';

const Service = () => {
  const items = [
    {id: 0, title: 'UI design', text: 'I create and adopt UI design to all the popular and rare gadgets and devices, ensuring the pixel-perfect image, not at the expense of functionality.', className: 'purple-color', icon: faBullseye, delay: 300},
    {id: 1, title: 'Web development', text: 'I develop web application giving attention to every single detail of your project and understand that it must fulfill a specific business objective.', className: 'iron-color', icon: faCode, delay: 500},
    {id: 2, title: 'Mobile development', text: 'I build mobile applications for different platforms using proven approaches, technology React Native, intelligent algorithms and modern UI.', className: 'sky-color', icon: faMobileAlt, delay: 700},
  ];
  return (
    <Row className='section-separator'>
      <Col sm={12} className='text-center section-title'>
        <Fade bottom opposite delay={200} >
          <h2>What I do</h2>
        </Fade>
      </Col>
      {items.map(item => (
        <ServiceItem key={item.id} {...item}/>
      ))}
    </Row>
  );
}

export default withSectionWrapper('service')(Service);
