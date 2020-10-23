import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  return (
    <section className='experience' id='experience'>
      <Container>
        <Row className='section-separator'>
          <Col sm={12} md={6}>
            <div className='education animated fadeInUp'>
              <h3>Education</h3>
              <div className="education-deatils">
                <div className="experience-item">
                  <h4>Bachelor of Applied Physics, Nanoelectronics and Computer Technologies</h4>
                  <a href='https://www.univ.kiev.ua/en' target='_blank' rel='noopener noreferrer'>Taras Shevchenko National University of Kyiv</a>
                  <div className="year">2015-2019</div>
                  <p>Faculty of Radio Physics, Electronics and Computer Systems</p>
                </div> 
                <div className="experience-item">
                  <h4>Master of Radiophysics and Electronics</h4>
                  <a href='https://www.univ.kiev.ua/en' target='_blank' rel='noopener noreferrer'>Taras Shevchenko National University of Kyiv</a>
                  <div className="year">2019-Persent</div>
                  <p>Faculty of Radio Physics, Electronics and Computer Systems</p>
                </div> 
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className='work animated fadeInUp'>
              <h3>Work Experience</h3>
              <div className="experience-deatils">
                <div className="experience-item">
                  <h4>Bachelor of Applied Physics, Nanoelectronics and Computer Technologies</h4>
                  <a href='https://www.univ.kiev.ua/en' target='_blank' rel='noopener noreferrer'>Taras Shevchenko National University of Kyiv</a>
                  <div className="year">2015-2019</div>
                  <p>Faculty of Radio Physics, Electronics and Computer Systems</p>
                </div> 
                <div className="experience-item">
                  <h4>Master of Radiophysics and Electronics</h4>
                  <a href='https://www.univ.kiev.ua/en' target='_blank' rel='noopener noreferrer'>Taras Shevchenko National University of Kyiv</a>
                  <div className="year">2019-Persent</div>
                  <p>Faculty of Radio Physics, Electronics and Computer Systems</p>
                </div> 
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
