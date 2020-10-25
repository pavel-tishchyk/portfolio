import React from 'react';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from '../../images/logo.svg';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

const Header = ({ history }) => {
  const navbar = React.useRef(null);

  const handleScroll = () => {
    if (window.pageYOffset) {
      navbar.current.classList.add('scrolled')
    } else {
      navbar.current.classList.remove('scrolled')
    }
  }
  
  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <header className='header' id='header'>
        <Navbar variant='dark' expand='lg' fixed="top" ref={navbar} collapseOnSelect>
          <Container>
            <Fade bottom opposite>
            <Navbar.Brand href="#">
              <Image fluid src={logo} width="30"
                height="30" alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="header-navbar-nav"/>
            <Navbar.Collapse id="header-navbar-nav">
              <Nav 
                as={Scrollspy} 
                className="mr-0 ml-auto"
                offset={-5}
                items={['home', 'about', 'skills', 'experience', 'portfolio', 'contact']} 
                currentClassName="active"
                onUpdate={(e) => history.push(`#${e.id}`)}
                activeKey={history.location.hash}
                >
                <Nav.Item as='li'>
                  <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href="#about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href="#skills">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href="#experience">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            </Fade>
          </Container>
        </Navbar>
    </header>
  );
}

export default withRouter(Header);
