import React, { useState } from 'react';
import './index.css'

const Tour = ({ id, name, price, info, image, removeTour}) => {


  const [readMore, setReadMore] = useState(false);
  
  return (

    <main>
      <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : 'read more'}</button>
          </p>
          <button className='delete-btn' onClick={()=> removeTour(id)}>Not Interested</button>
        </footer>
      </article>


    </main>

  )
};

export default Tour;
