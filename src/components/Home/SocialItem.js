import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialItem = ({ link, icon }) => (
  <li>
    <a href={link}>
      <FontAwesomeIcon icon={icon} />
    </a>
  </li>
);

export default SocialItem
