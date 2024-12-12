import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";

function Home() {
  const [catFact,setCatFact]=useState("");

  const fetchCatFact =()=>{
    axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
    });
  };
  useEffect(()=>{
    fetchCatFact();
  },[]);
  
  
  return (
    
    <div>
      <button onClick={fetchCatFact}>Genrate cat</button>
      <p>{catFact}</p>
    </div>
  );
}

export default Home;
