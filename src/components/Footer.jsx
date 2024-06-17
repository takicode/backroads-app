import React from 'react'
import { pageLinks, media } from '../data'
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link)=>{
            const {id, href, text } = link
            return (
              <li key={id}>
                <a className='footer-link' href={href}>{text}</a>
              </li>
            )
          })}
      </ul>
      <ul className="footer-icons">
        {media.map((link)=>{
            const {id, href, icon } = link
            return (
              <li key={id}>
                <a className='footer-icon' href={href} target='_blank' rel='nonreffer'><i className={icon}></i></a>
              </li>
            )
          })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer