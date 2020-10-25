import React from 'react';
import ReactWOW from 'react-wow';
import { faFacebook, faLinkedin, faInstagram ,faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import SocialItem from './SocialItem';

const SocialList = () => {
  const items = [
    {id: 0, link: '#link1', icon: faFacebook},
    {id: 1, link: '#link1', icon: faLinkedin},
    {id: 2, link: '#link1', icon: faGithub},
    {id: 3, link: '#link1', icon: faInstagram},
    {id: 4, link: '#link1', icon: faDribbble},
  ];

  return (
    <ReactWOW animation='fadeInUp' duration='0.8s' delay='0.7s'>
      <ul className='social-icon'>
        {items.map(item => (
          <SocialItem key={item.id} {...item} />
        ))}
      </ul>
    </ReactWOW>
  );
}

export default SocialList;
