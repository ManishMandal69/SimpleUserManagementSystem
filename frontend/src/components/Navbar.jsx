import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Sums</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <button className="btn btn-outline-success ms-auto" type="submit"><Link className='nav-link' to="/form/create">Add User</Link></button>
    </div>
  </div>
</nav>
  )
}

export default Navbar
