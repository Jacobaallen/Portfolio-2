import React, { Component } from 'react';
import '../styles/nav.css';

class Nav extends Component{
  render () {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <a className="navbar-brand" href="/">
              <img src="images/logosmall.png" height="30" alt="jaa logo"/>
            </a>
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <a className="nav-link" href="/">Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Art">Art Archive</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#languages">Languages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
