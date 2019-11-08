import React from "react";
import NasaList from "./components/nasaList";
import Jumbotron from "./components/JumboTron"
import Example from "./components/NavBar"


export default function App() {

  return( 
    <div className= "App">
      
      <Example />
      
      <Jumbotron />
      <NasaList />
     
   
    </div>
  )
}

