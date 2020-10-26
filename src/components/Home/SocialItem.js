import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialItem = ({ link, icon }) => (
  <li>
    <a href={link} rel="noopener noreferrer" target="_blank">
      <FontAwesomeIcon icon={icon} />
    </a>
  </li>
);

export default SocialItem
