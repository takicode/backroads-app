import React from 'react'
import logo from "../images/logo.svg"
import { media, pageLinks } from '../data'

const Navbars = () => {
  return (
    <nav
      className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link)=>{
            const {id, href, text } = link
            return (
              <li key={id}>
                <a className='nav-link' href={href}>{text}</a>
              </li>
            )
          })}
          
        </ul>

        <ul className="nav-icons">
          {media.map((link)=>{
            const {id, href, icon } = link
            return (
              <li key={id}>
                <a className='nav-icon' href={href} target='_blank' rel='nonreffer'><i className={icon}></i></a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbars