import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="menu-wrap">
      <input type="checkbox" className="toggler"></input>
      <div className="hamburger"><div></div></div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li><Link to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
              <li><Link to={process.env.PUBLIC_URL + "/about"}>About</Link></li>
              <li><Link to={process.env.PUBLIC_URL + "/portfolio"}>Portfolio</Link></li>
              <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
