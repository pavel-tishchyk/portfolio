import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <Container>
        <Row className='section-separator'>
          <Col sm={12} md={6}>
            <div className='professional-skill animated fadeInUp'>
              <h3>Technical Skills</h3>
              <div className="candidatos">
                  <div className="parcial">
                      <div className="info">
                          <div className="name">Javascript</div>
                          <div className="percentagem-num">86%</div>
                      </div>
                      <div className="progressBar">
                          <div className="percentagem" style={{width: '86%'}}></div>
                      </div>
                  </div>
              </div>
              <div className="candidatos">
                  <div className="parcial">
                      <div className="info">
                          <div className="name">Java</div>
                          <div className="percentagem-num">46%</div>
                      </div>
                      <div className="progressBar">
                          <div className="percentagem" style={{width: '46%'}}></div>
                      </div>
                  </div>
              </div>
              <div className="candidatos">
                  <div className="parcial">
                      <div className="info">
                          <div className="name">Python</div>
                          <div className="percentagem-num">38%</div>
                      </div>
                      <div className="progressBar">
                          <div className="percentagem" style={{width: '38%'}}></div>
                      </div>
                  </div>
              </div>
              <div className="candidatos">
                  <div className="parcial">
                      <div className="info">
                          <div className="name">PHP</div>
                          <div className="percentagem-num">17%</div>
                      </div>
                      <div className="progressBar">
                          <div className="percentagem" style={{width: '17%'}}></div>
                      </div>
                  </div>
              </div>                                    
              <div className="candidatos">
                  <div className="parcial">
                      <div className="info">
                          <div className="name">PHP</div>
                          <div className="percentagem-num">17%</div>
                      </div>
                      <div className="progressBar">
                          <div className="percentagem" style={{width: '17%'}}></div>
                      </div>
                  </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className='professional-skill animated fadeInUp'>
            <h3>Professional Skills</h3>
              <div className="candidatos">
                <div className="parcial">
                    <div className="info">
                        <div className="name">Communication</div>
                        <div className="percentagem-num">95%</div>
                    </div>
                    <div className="progressBar">
                        <div className="percentagem" style={{width: '95%'}}></div>
                    </div>
                </div>
              </div>
              <div className="candidatos">
                <div className="parcial">
                    <div className="info">
                        <div className="name">Team Work</div>
                        <div className="percentagem-num">65%</div>
                    </div>
                    <div className="progressBar">
                        <div className="percentagem" style={{width: '65%'}}></div>
                    </div>
                </div>
              </div>
              <div className="candidatos">
                <div className="parcial">
                    <div className="info">
                        <div className="name">Project Management</div>
                        <div className="percentagem-num">35%</div>
                    </div>
                    <div className="progressBar">
                        <div className="percentagem" style={{width: '35%'}}></div>
                    </div>
                </div>
              </div>
              <div className="candidatos">
                <div className="parcial">
                    <div className="info">
                        <div className="name">Creativity</div>
                        <div className="percentagem-num">75%</div>
                    </div>
                    <div className="progressBar">
                        <div className="percentagem" style={{width: '75%'}}></div>
                    </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
