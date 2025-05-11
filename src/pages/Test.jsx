import React from 'react'
import { useState, useEffect } from "react";

export default function Test() {
    useEffect(() => {
        console.log("hello")
      return () => window.location="www.google.com" 
    }, []);
  
    return (
    <div>Test</div>
  )
}
