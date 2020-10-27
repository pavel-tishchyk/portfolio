import React from 'react';
import { Container, Row, Col, Nav, CardColumns, Modal, Button, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PortfolioItem from './PortfolioItem';

const getProjectTypeName = (type) => {
  switch(type) {
    case 'web': 
      return 'Web Application'
    case 'mobile': 
      return 'Mobile Application'
    case 'design': 
      return 'Web Design'
    default:
      return 'Application' 
  }
}

const Portfolio = () => {
  const [projects] = React.useState([
    {
      id: 0, 
      name: 'Blog',
      type: 'web',
      description: 'Wrap is a clean and elegant Multipurpose Landing Page Template. It will fit perfectly for Startup, Web App or any type of Web Services.It has 4 background styles with 6 homepage styles. 6 pre-defined color scheme. All variations are organized separately so you can use / customize the template very easily',
      tags: ['HTML', 'CSS', 'TypeScript', 'NextJS', 'React', 'Redux', 'Semantic UI'],
      link: 'https://developers-today-test.now.sh',
      images: ['blog.png', 'blog-1.png', 'blog-2.png', 'blog-3.png']
    },
    {
      id: 1, 
      name: 'Personal Website',
      type: 'web',
      description: 'Wrap is a clean and elegant Multipurpose Landing Page Template. It will fit perfectly for Startup, Web App or any type of Web Services.It has 4 background styles with 6 homepage styles. 6 pre-defined color scheme. All variations are organized separately so you can use / customize the template very easily',
      tags: ['HTML', 'SCSS', 'JavaScript', 'React', 'Bootstrap'],
      link: 'https://localhost:3000',
      images: ['personal.png', 'personal-1.png', 'personal-2.png', 'personal-3.png']
    },
    {
      id: 2, 
      name: 'Waxom',
      type: 'design',
      description: 'Wrap is a clean and elegant Multipurpose Landing Page Template. It will fit perfectly for Startup, Web App or any type of Web Services.It has 4 background styles with 6 homepage styles. 6 pre-defined color scheme. All variations are organized separately so you can use / customize the template very easily',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://waxom-theta.vercel.app',
      images: ['waxom.png', 'waxom-1.png', 'waxom-2.png', 'waxom-3.png']
    },
  ])
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [currentProject, setCurrentProject] = React.useState(projects[0]);
  const [show, setShow] = React.useState(false);

  const onSelect = (eventKey) => {
    setFilteredProjects(projects.filter((p) => p.type.includes(eventKey)));
  };

  const onClick = (id) => {
    setCurrentProject(filteredProjects.find(p => p.id === id));
    setShow(true);
  };

  const cards = filteredProjects.map((project, i) => (
    <PortfolioItem key={project.id} onClick={onClick} {...project} delay={i*100}/>
  ));

  return (
    <section className='portfolio' id='portfolio'>
      <Container>
        <Row className='section-separator'>
          <Col sm={12} className='section-title'>
            <Fade bottom opposite delay={100}>
              <h3>Recent Portfolio</h3>
            </Fade>
          </Col>
          <Col sm={12} className='portfolio-details'>
            <Col sm={12} className='portfolio-nav'>
              <Fade bottom opposite delay={200}>
                <Nav 
                  as='ul' 
                  className="justify-content-center" 
                  defaultActiveKey=''
                  onSelect={onSelect}>
                  <Nav.Item as='li'>
                    <Nav.Link eventKey="">All Categories</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as='li'>
                    <Nav.Link eventKey="web">Web App</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as='li'>
                    <Nav.Link eventKey="mobile">Mobile App</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as='li'>
                    <Nav.Link eventKey="design">Web Design</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Fade>
            </Col>
            <Col sm={12} className='portfolio-gallery'>
                <CardColumns>
                  {cards}
                </CardColumns>
            </Col>
            <Modal
              centered
              size="xl"
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="portfolio-modal modal-dialog-scrollable" 
            >
              <Modal.Body >
                <Container>
                  <Row>
                    <Col sm={5}>
                      <div className='project-info'>
                        <h2>
                          {currentProject.name} - 
                          <span> {getProjectTypeName(currentProject.type)}</span>
                        </h2>
                        <p>{currentProject.description}</p>
                        <div className='about-tag'>
                          <ul>
                            {currentProject.tags.map((tag, i) => (
                              <li key={i}>
                                <span>{tag}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button 
                          variant="warning" 
                          href={currentProject.link}
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          Live demo
                        </Button>
                      </div>
                    </Col>
                    <Col sm={7}>
                      <div className='project-images'>
                        {currentProject.images.slice(1).map((image, i) => (
                          <Image key={i} fluid src={require(`../../images/projects/${image}`)}/>
                        ))}
                      </div>
                    </Col>
                  </Row>
                  <FontAwesomeIcon 
                    icon={faTimes} 
                    className='modal-close'
                    onClick={() => setShow(false)}/>
                </Container>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
