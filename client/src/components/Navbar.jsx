import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'

import "../style/style.scss"
import logo from"../image/logo.png";
import {Link} from 'react-router-dom'
// import { AuthContextProvider } from '../context/authContext';
const Navbar = () => {
  const {currentUser,logout} = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
      <div className="logo">
        <Link to="/"></Link>
        <img src={logo} alt=""/>
      </div>
      <div className="links">
        <Link className="link" to="/?cat=art"><h6>ART</h6></Link>
        <Link className="link" to="/?cat=science"><h6>SCIENCE</h6></Link>
        <Link className="link" to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
        <Link className="link" to="/?cat=cinema"><h6>CINEMA</h6></Link>
        <Link className="link" to="/?cat=design"><h6>DESIGN</h6></Link>
        <Link className="link" to="/?cat=food"><h6>FOOD</h6></Link>
        <span>{currentUser?.username}</span>
        {currentUser ? <span onClick={logout}>Logout</span>:<Link className='link' to="/login">Logout</Link>}
        <span>Logout</span>
      <span className="write">
        <Link className="Link" to="/write">write</Link>
      </span>
      </div>
      </div>
 
    </div>
  )
}

export default Navbar
