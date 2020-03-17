import React from 'react';

import './sidehug.scss';

const Sidehug = (props) => {
  const {
    className,
    imgSrc,
    imgAlt,
    header,
    content,
    order
  } = props;
  return(
    <div className={`sidehug ${className}`}>
      <img src={imgSrc} alt={imgAlt} className={`thumbnail order-${order[0]}`} />
      <div className={`content order-${order[1]}`}>
        <h3>{header}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Sidehug;