import React from "react"

function Navbar() {
  return (
    <nav className="menu-wrap">
      <input type="checkbox" className="toggler"></input>
      <div className="hamburger"><div></div></div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li><a href="/Portfolio-Page/">Home</a></li>
              <li><a href="/Portfolio-Page//about">About</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
