import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useSelector } from 'react-redux'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function Navbar() {
 const {carts} =useSelector(state=>state.Reducer);
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw35ea6a5a/images/logo.svg" alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/products">Sale</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Fabrics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ready To Wear</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Western</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Chapter</a>
        </li>
      </ul>
      <div className="social-icon">
        <div className="search">
     <i class="fa-solid fa-magnifying-glass"></i>
      <p>Search</p>
      </div>
      <div className="Bag">
        <Link to="/bag">      <Badge badgeContent={carts.length} color="primary">
      <MailIcon color="action" />
    </Badge>
    </Link>

      </div>
      <div className="truck">

     
      <i class="fa-solid fa-truck"></i>
      <p>Truck</p>

      </div>
      <div className="account">
      <Link to="/Login"><i class="fa-solid fa-user"></i></Link>
      <p>account</p>
      </div>
     

      </div>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
