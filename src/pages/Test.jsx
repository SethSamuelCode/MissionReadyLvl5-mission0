// this  page is used to test features 


import React from "react";
import { useState, useEffect } from "react";

//use effect cleanup function 

function Text() {
    useEffect(() => {
        console.log("hello");
        return () => console.log("world");
    }, []);
  return <h1>TEST</h1>;
}

export default function Test() {
    const [showTest, setShowTest] = useState(false);
  return (
    <div>
      <p>Test</p>
      {showTest&&<Text></Text>}
      <button onClick={()=>setShowTest(!showTest)} > BUTTON</button>
    </div>
  );
}
