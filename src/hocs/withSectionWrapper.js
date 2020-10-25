import React from 'react';
import { Container } from 'react-bootstrap';

const withSectionWrapper = (id) => (Component) => (props) => (
  <section className={id} id={id}>  
    <Container>
      <Component {...props}/>
    </Container>
  </section>
)

export default withSectionWrapper;