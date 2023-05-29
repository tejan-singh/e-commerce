import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <h1>Mantra</h1>
    <Link to="/products">Go to products</Link>
    </div>

  )
}

export default Home