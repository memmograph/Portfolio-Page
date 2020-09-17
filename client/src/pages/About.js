import React from "react";
import Picture from "../images/laura1.jpg"
import Resume from "../images/LauraLaraAmaya_Resume.pdf"
import Title from "../components/Title"
import Footer from "../components/Footer"


function About(){
  return(
    <div>
      <main className="container">
      <row className="row">
      <section className="col-lg-12">
      <main className="mt-5">
        <Title
        section="About Me"
        />
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="container">
            <row className="row">
              <img src={Picture} className="img-fluid" alt="Laura" width="400" height="400"></img>
              <section className="col-lg-5"> 
                <p className="bio">My name is Laura Lara. I am a senior at UNC Charlotte double major in Finance and Management Information Systems. I am currently attending the UNC Charlotte Full Stack Web Development Bootcamp. I am excited to update you all on my journey through my portfolio!</p>
                <main className="mt-5">
                <a href={Resume} download><button id="button5"className="btn btn-outline-primary">Resume</button></a>
                </main>
              </section>
            </row>
            </div>
          </div>
      </main> 
      <main className="mt-5"></main>
      </section>    
      </row>
      </main>
    <Footer></Footer>
    </div>
  )
}
export default About;

