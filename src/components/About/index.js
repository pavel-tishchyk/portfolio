import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import image from '../../images/ab-img.png';
import file from '../../cv/Pavel_Tishchyk_-_Junior_Front_end_Developer_1.pdf';

const About = () => {
  return (
    <section className='about' id='about'>
      <Container>
        <Row className='section-separator'>
          <Col sm={12} md={6}>
            <div className='about-img animated fadeInUp'>
              <Image
                fluid
                src={image}
              />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className='about-inner animated fadeInUp'>
              <h2>About Me</h2>
              <p>Hello, I’m a Pavel, web-developer based on Kyiv. 
                I have more than a year of experience in web site 
                building. Also I am good at
              </p>
              <div className='about-tag'>
                <ul>
                  <li>
                    <span>HTML</span>
                  </li>
                  <li>
                    <span>CSS</span>
                  </li>
                  <li>
                    <span>JavaScript</span>
                  </li>
                  <li>
                    <span>React</span>
                  </li>
                  <li>
                    <span>Redux</span>
                  </li>
                  <li>
                    <span>Webpack</span>
                  </li>
                  <li>
                    <span>Git</span>
                  </li>
                </ul>
              </div>
              <Button 
                href={file}
                download="Pavel_Tishchuk_CV"
                variant="warning">
                Download CV
                <FontAwesomeIcon icon={faDownload} />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
