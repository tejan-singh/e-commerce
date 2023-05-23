import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <p>Home</p>
    <Link to="/products">Go to products</Link>
    </div>

  )
}

export default Home