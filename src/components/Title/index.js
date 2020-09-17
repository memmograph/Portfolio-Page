import React from "react"

function Title(props){
    return(
      <div className="container">
        <row className="row">
          <section className="col-lg-6">
            <div id="title">{props.section}</div>
          </section>
        </row>
      </div>
    )
}
export default Title;