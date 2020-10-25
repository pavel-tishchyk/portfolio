import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import hero from '../../images/hero-img.jpg';
import withSectionWrapper from '../../hocs/withSectionWrapper';
import SocialList from './SocialList';

const Home = () => {
  return (
    <Row className='home-padding'>
      <Col sm={6}>
        <div className='hero-info'>
          <Fade bottom opposite delay={200}>
            <div className='promo'>
              <span>Hello I`m</span>
            </div>
            <h2>Pavel Tishchuk</h2>
            <h4>Front end Developer</h4>
            <ul className='info'>
              <Fade bottom opposite delay={200}>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:">pavel.tishchyk@gmail.com</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="callto:">+38 097 280 68 23</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarker} />
                  <address>35, Lomonosova, Kyiv, Ukraine</address>
                </li>
              </Fade>
            </ul>
            <SocialList/>
          </Fade>
        </div>
      </Col>
      <Col sm={6}>
        <Fade bottom opposite delay={200}>
          <div className='hero-img'>
            <div className='img-border'>
              <Image
                fluid
                roundedCircle
                src={hero}
              />
            </div>
          </div>
        </Fade>
      </Col>
    </Row>
  );
}

export default withSectionWrapper('home')(Home);
