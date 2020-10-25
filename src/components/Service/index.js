import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { faBullseye, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import withSectionWrapper from '../../hocs/withSectionWrapper';
import ServiceItem from './ServiceItem';

const Service = () => {
  const items = [
    {id: 0, title: 'UI design', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', className: 'purple-color', icon: faBullseye, delay: 300},
    {id: 1, title: 'Web development', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', className: 'iron-color', icon: faCode, delay: 500},
    {id: 2, title: 'App development', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', className: 'sky-color', icon: faMobileAlt, delay: 700},
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
