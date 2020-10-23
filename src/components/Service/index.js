import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCode, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  return (
    <section className='service' id='service'>
      <Container>
        <Row className='section-separator'>
          <Col sm={12} className='text-center section-title'>
            <h2>What I do</h2>
          </Col>
          <Col sm={4}>
            <div className='service-item animated fadeInUp'>
              <FontAwesomeIcon 
                className='purple-color'
                icon={faBullseye} 
              />
              <h3>UI design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className='service-item animated fadeInUp'>
              <FontAwesomeIcon 
                className='iron-color'
                icon={faCode} 
              />
              <h3>Web development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className='service-item animated fadeInUp'>
              <FontAwesomeIcon 
                className='sky-color'
                icon={faWindowMaximize} 
              />
              <h3>App development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Service;
