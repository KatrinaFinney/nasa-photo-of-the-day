import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaToast from "./NasaToast"
export default function NasaList() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=HUezJFzxrpzRIQ0LNG1HOGTKknQZfPtw3AbS1ukb")
     
      .then(response => {
        setInfo(response.data);
         console.log(response);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div className="list">
      
        
          <NasaToast
            key={info.url}
            title={info.title}
            explanation={info.explanation}
            copyright={info.copyright}
            date={info.date}
          />
      
      
    </div>
  );
    }
