import React from 'react';

const TagsList = () => {
  const tags = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Webpack', 'Git'];

  return (
      <div className='about-tag'>
        <ul>
          {tags.map((tag, id) => (
            <TagItem key={id} tag={tag}/>
          ))}
        </ul>
      </div>
  );
}

const TagItem = ({ tag }) => (
  <li>
    <span>{tag}</span>
  </li>
);

export default TagsList;
