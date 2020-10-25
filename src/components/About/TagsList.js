import React from 'react';
import ReactWOW from 'react-wow';

const TagsList = () => {
  const tags = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Webpack', 'Git'];

  return (
    <ReactWOW animation='fadeInUp' duration='0.8s' delay='0.3s'>
      <div className='about-tag'>
        <ul>
          {tags.map((tag, id) => (
            <TagItem key={id} tag={tag}/>
          ))}
        </ul>
      </div>
    </ReactWOW>
  );
}

const TagItem = ({ tag }) => (
  <li>
    <span>{tag}</span>
  </li>
);

export default TagsList;
