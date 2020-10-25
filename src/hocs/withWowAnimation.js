import React from 'react';
import ReactWOW from 'react-wow';

const withWowAnimation = (animation) => (Component) => (props) => (
  <ReactWOW animation={animation}>
    <Component {...props}/>
  </ReactWOW>
)

export default withWowAnimation;