import React, { Fragment, useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './index.css'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState(null)

  async function fetchTours() {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setTours(data);

      if (!response.ok) {
        throw new Error('No internet connection')
      }
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  } 

  useEffect(() => {
    fetchTours()
  }, [])

  function removeToursHandler(id) {
    const newTours = tours.filter((tour) => tour.id !== id)
     setTours(newTours)
  }
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  } else if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <Fragment>
      {!loading && tours.length > 0 &&<Tours tours={tours} removeTour={removeToursHandler } />}
      {!loading && error && <p>{error}</p>}
      {loading && <Loading />}
    </Fragment>
  )

}

export default App
