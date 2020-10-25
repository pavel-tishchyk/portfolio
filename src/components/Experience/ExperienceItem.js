import React from 'react';
import Fade from 'react-reveal/Fade';

const ExperienceItem = ({ title, place, year, responsibility, delay }) => (
  <Fade bottom opposite delay={delay}>
    <div className="experience-item">
      <h4>{title}</h4>
      <a href='https://www.univ.kiev.ua/en' target='_blank' rel='noopener noreferrer'>{place}</a>
      <div className="year">{year}</div>
      <p>{responsibility}</p>
    </div> 
  </Fade>
);

export default ExperienceItem;
