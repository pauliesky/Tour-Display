import React from 'react';
import Tour from './Tour';
import './index.css'



const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <main>
        <div className='title'>
          <h2> My Tours </h2>
          <div className='underline'></div>
        </div>
    </main>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>


  )
};

export default Tours;
