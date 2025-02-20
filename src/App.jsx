import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as react from "react";
function getTitle(title){
  return title;
}

function App(){
  return (
    <div>
      <h1> Hello {getTitle("react")}</h1>
      <label htmlFor="search">search:</label>
      <input id="search" type="text" />
    </div>
  );
}
export default App;
