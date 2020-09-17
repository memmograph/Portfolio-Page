import React from "react"

function Footer() {
  return (
    <footer>
      <div className="social-media">
          <a href="mailto:llaraama@uncc.edu"><i className="fa fa-envelope" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/laura-lara-327762189/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a href="https://github.com/llaraama"><i className="fa fa-github-square" aria-hidden="true"></i></a>
          <a href="./assets/LauraLaraResume.pdf" download><i className="fa fa-file-text" aria-hidden="true"></i></a>
      </div>
      <p className="copyrights">&copy; Copyright 2020</p>
    </footer>
  );
}

export default Footer;