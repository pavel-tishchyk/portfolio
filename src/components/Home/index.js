import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram ,faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import hero from '../../images/hero-img.jpg';

const Home = () => {
  return (
    <section className='home' id='home'>
      <Container>
        <Row className='home-padding'>
          <Col sm={6}>
            <div className='hero-info animated fadeInUp'>
              <div className='promo'>
                <span>Hello I`m</span>
              </div>
              <h2>Pavel Tishchuk</h2>
              <h4>Front end Developer</h4>
              <ul className='info'>
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
              </ul>
              <ul className='social-icon'>
                <li>
                  <a href="#link1">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#link1">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="#link1">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a href="#link1">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#link1">
                    <FontAwesomeIcon icon={faDribbble} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={6}>
            <div className='hero-img animated fadeInUp'>
              <div className='img-border'>
                <Image
                  fluid
                  roundedCircle
                  src={hero}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
