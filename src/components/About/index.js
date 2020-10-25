import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import image from '../../images/ab-img.png';
import file from '../../cv/Pavel_Tishchyk_-_Junior_Front_end_Developer_1.pdf';
import withSectionWrapper from '../../hocs/withSectionWrapper';
import TagsList from './TagsList';

const About = () => {
  return (
    <Row className='section-separator'>
      <Col sm={12} md={6}>
        <Fade bottom opposite delay={400}>
          <div className='about-img'>
            <Image fluid src={image}/>
          </div>
        </Fade>
      </Col>
      <Col sm={12} md={6}>
        <div className='about-inner'>
          <Fade bottom opposite delay={200}>
            <h2>About Me</h2>
            <p>Hello, I’m a Pavel, web-developer based on Kyiv. 
              I have more than a year of experience in web site 
              building. Also I am good at
            </p>
            <TagsList/>
            <Button 
              href={file}
              download="Pavel_Tishchuk_CV"
              variant="warning">
              Download CV
              <FontAwesomeIcon icon={faDownload} />
            </Button>
          </Fade>
        </div>
      </Col>
    </Row>
  );
}

export default withSectionWrapper('about')(About);
