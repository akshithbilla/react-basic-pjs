import React from "react";
import axios from "axios";
import { useState } from "react";

function About() {
  const [name,setName]=useState("0");
  const [predictedAge,setPredictedAge]=useState(0);
 
  const fetchData=()=>{
    axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      console.log(res.data);
      setPredictedAge(res.data.age);
      
    });
  };
   
  return (
     <div style={{  padding: '10px', width: '300px'}}>
      <input 
       placeholder="Ex. Pedro" 
      onChange={(event)=>{
        setName(event.target.value)
        
      }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Age:{predictedAge}</h1>
      <h2>Name: {name}</h2>
     </div>
  );
}

export default About;
