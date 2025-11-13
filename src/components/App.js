import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects=[
     {
      name: "ResourceVault",
      description: "A decentralized platform for sharing and managing books and notes."
    },
    {
      name: "EcoTrack",
      description: "An app that helps users track their daily carbon footprint."
    },
    {
      name: "FoodSaver",
      description: "A community-based app to reduce food waste by sharing surplus meals."
    }
  ]
  return (
    <div id="main" className="ns-wrapper">
      {
        projects.map((project,index)=>(
          <div key={index}>
            <h1 data-ns-test="project-name">{project.name}</h1>
            <h6 data-ns-test="project-description">{project.description}</h6>
          </div>
        ))
      }
    </div>
  )
}


export default App;
