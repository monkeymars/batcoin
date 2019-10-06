import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <hr />
    </>
  )
}

export default NavbarComponent
