import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div><p>Error404: Not found</p>
    <Link to='/'>Go to home</Link>
    </div>
  )
}

export default Error404