import React from "react";

function Cards(props){
  return(
    <div className="max-w-sm rounded overflow-hidden shadow-sm lg:ml-auto lg:mr-0 mx-auto my-4"> 
      <img className="w-full" src={props.gif} alt="project demo"></img>
      <div className="px-6 py-4">
      <div id="titles" className="font-bold text-xl mb-2">{props.title}</div>
      <div className="mx-1">
        <a id="web-links"href={props.webLink}>{props.websiteName}</a>
      </div>
      <div className="mx-1">
        <a id="web-links" href={props.gitLink}>GitHub {props.projectName}</a>
      </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.technology}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.technology2}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.technology3}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.technology4}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.technology5}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.technology6}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.technology7}</span>
      </div>
    </div>

  )
}
export default Cards;