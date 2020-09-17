import React from "react";
import Footer from "../components/Footer";
import Title from "../components/Title"

function Contact(){
return(
  <div>
    <main className="container">
      <row className="row">
      <section className="col-lg-12">
      <main className="mt-5">
        <Title
          section="Contact" 
        />
        <section className="col-lg-8">
          <form method="post" action="contact.php"className="form-group">
            <div className="form-row">
              <div className="form-group col">
                <label for="exampleFormControlInput1">First name</label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="form-group col">
                <label for="exampleFormControlInput1">Last name</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
              </div>
            </div>
            <div className="form-group form-row">
                <div className="col">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                <main className="mt-5">
                <button id="button5"className="btn btn-primary" type="submit">Submit</button>
                </main>
                </div>
            </div>
          </form>
        </section>
      </main>
      </section>
      </row>
    </main>
    <Footer></Footer>
  </div>
)



}
export default Contact;