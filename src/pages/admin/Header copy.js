import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
const Header = () => {


    return (
        <div>
                  {/* ======= Header ======= */}
            <header id="header" className="header-top">
                <div className="container">
                <h1><a href="index.html">ADMIN</a></h1>
                {/* Uncomment below if you prefer to use an image logo */}
                {/* <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
                <h2>I'm a passionate <span>graphic designer</span> from New York</h2>
                <nav id="navbar" className="navbar">
                    <ul>
                    <li><a className="nav-link " href=""><Link to={'/'}>Home</Link></a></li>

                    <li><a className="nav-link" href="" ><Link to={'/about'}>About</Link></a></li>
                    <li><a className="nav-link" href=""><Link to={'/Resume'}>Resume</Link></a></li>
                    <li><a className="nav-link" href=""><Link to={'/Services'}>Services</Link></a></li>
                    <li><a className="nav-link" href=""><Link to={'/Portfolio'}>Portfolio</Link></a></li>
                    <li><a className="nav-link" href=""><Link to={'/Contact'}>Contact</Link></a></li>
                    <li><a className="nav-link" href=""><Link to={'/Contact'}>Logout</Link></a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>{/* .navbar */}
                <div className="social-links">
                    <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                </div>
                </div>
            </header>{/* End Header */}
        </div>
    )
}

export default Header
