import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram ,faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import GoogleMapReact from 'google-map-react';

const Footer = () => {
  const [validated, setValidated] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onChange = (event) => {
    setFormData({...formData, [event.target.id]: event.target.value});
  }

  return (
    <footer className='footer' id='contact'>
      <div className='map-image image-bg'>
        <Container>
          <Row className='section-separator'>
            <Col sm={12} className='section-title'>
              <Fade bottom opposite delay={200}>
                <h3>Contact Me</h3>
              </Fade>
            </Col>
            <Col sm={12} className='footer-address'>
              <Row>
                <Col sm={12} md={4}>
                  <Fade bottom opposite delay={300}>
                    <div className='address-item'>
                      <div className='each-icon'>
                        <FontAwesomeIcon icon={faLocationArrow}/>
                      </div>
                      <div className='each-info'>
                        <h4>Address</h4>
                        <address>Kyiv, Ukraine</address>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col sm={12} md={4}>
                  <Fade bottom opposite delay={500}>
                    <div className='address-item'>
                      <div className='each-icon'>
                        <FontAwesomeIcon icon={faEnvelope}/>
                      </div>
                      <div className='each-info'>
                        <h4>Email</h4>
                        <a href="mailto:">pavel.tishchyk@gmail.com</a>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col sm={12} md={4}>
                  <Fade bottom opposite delay={700}>
                    <div className='address-item'>
                      <div className='each-icon'>
                        <FontAwesomeIcon icon={faPhone}/>
                      </div>
                      <div className='each-info'>
                        <h4>Phone</h4>
                        <a href="callto:">+38 097 280 68 23</a>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6}>
              <Form 
                noValidate 
                validated={validated} 
                onSubmit={handleSubmit}
                className='contact-form'>
                <Fade bottom opposite delay={200}>
                  <Form.Row>
                    <Col>
                      <Form.Control 
                        required
                        type="text"
                        placeholder="First name"
                        id='firstName'
                        value={formData.firstName}
                        onChange={onChange}
                      />
                    </Col>
                    <Col>
                      <Form.Control 
                        required
                        type="text"
                        placeholder="Last name" 
                        id='lastName'
                        value={formData.lastName}
                        onChange={onChange}
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        required
                        type="text" 
                        placeholder="Your Email" 
                        id='email'
                        value={formData.email}
                        onChange={onChange}
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Control 
                        required
                        as="textarea" 
                        rows={6} 
                        placeholder="Your Message" 
                        id='message'
                        value={formData.message}
                        onChange={onChange}
                      />
                    </Col>
                  </Form.Row>
                  <Button block type='submit' variant='warning'>Send Message</Button>
                </Fade>
              </Form>
            </Col>
            <Col sm={12} md={6}>
              <Fade bottom opposite delay={200}>
                <div className='footer-map'>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyC2jnBs-vr97eCfUuoJZfTjAHQFeerybgM' }}
                  defaultCenter={{
                    lat: 59.95,
                    lng: 30.33
                  }}
                  defaultZoom={11}
                >
                  {/* <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  /> */}
                </GoogleMapReact>
                </div>
              </Fade>
            </Col>
            <Col sm={12} className='footer-copyright'>
              <Row>
                <Col sm={12} md={6}>
                  <Fade bottom opposite delay={200}>
                    <div className='text-left text-xs-center'>
                      <p>{`Copyright © ${new Date().getFullYear()} Pavel Tishchuk. All rights reserved.`}</p>
                    </div>
                  </Fade>
                </Col>
                <Col sm={12} md={6}>
                  <Fade bottom opposite delay={200}>
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
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
