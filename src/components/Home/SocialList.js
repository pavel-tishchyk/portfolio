import React from 'react';
import { faFacebook, faLinkedin, faInstagram ,faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import SocialItem from './SocialItem';

const SocialList = () => {
  const items = [
    {id: 0, link: 'https://www.facebook.com/pavel.tishchyk.1/', icon: faFacebook},
    {id: 1, link: 'https://www.linkedin.com/in/pavel-tishchuk/', icon: faLinkedin},
    {id: 2, link: 'https://github.com/pavel-tishchyk/', icon: faGithub},
    {id: 3, link: 'https://www.instagram.com/shaky_ua/', icon: faInstagram},
    {id: 4, link: 'https://portfolio-nu-blush.vercel.app/', icon: faDribbble},
  ];

  return (
    <ul className='social-icon'>
      {items.map(item => (
        <SocialItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default SocialList;
