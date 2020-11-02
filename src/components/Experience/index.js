import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import withSectionWrapper from '../../hocs/withSectionWrapper';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const education = [
    { id: 0, 
      title: 'Bachelor of Applied Physics, Nanoelectronics and Computer Technologies', 
      place: 'Taras Shevchenko National University of Kyiv', 
      year: '2015-2019', 
      responsibility: 'Faculty of Radio Physics, Electronics and Computer Systems',
      delay: 300
    },
    { id: 1, 
      title: 'Master of Applied Physics, Nanoelectronics and Computer Technologies', 
      place: 'Taras Shevchenko National University of Kyiv', 
      year: '2019-Persent', 
      responsibility: 'Faculty of Radio Physics, Electronics and Computer Systems',
      delay: 500
    },
  ];

  return (
    <Row className='section-separator'>
      <Col sm={12} md={6}>
        <div className='education'>
          <Fade bottom opposite delay={200}>
            <h3>Education</h3>
          </Fade>
          <div className="education-deatils">
            {education.map(item => (
              <ExperienceItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Col>
      <Col sm={12} md={6}>
        <div className='work'>
          <Fade bottom opposite delay={200}>
            <h3>Work Experience</h3>
          </Fade>
          <div className="experience-deatils">
            {education.map(item => (
              <ExperienceItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default withSectionWrapper('experience')(Experience);
