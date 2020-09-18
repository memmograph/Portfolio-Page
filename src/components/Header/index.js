import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <header className="showcase">
      <div className="container showcase-inner">
        <h1>Welcome</h1>
        <p>I'm Laura, a Mangaement Information Systems Major and a UNC Coding Bootcamp student.</p>
        <Link to={process.env.PUBLIC_URL + "/about"} className="mainbtn">Read More</Link>
      </div>
    </header>
  )
}
export default Footer;