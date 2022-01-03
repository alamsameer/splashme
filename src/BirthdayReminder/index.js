import React,{useState} from "react";
import ReactDOM from "react-dom";
import Data from "./data";
import List from "./List";

const Breminder =()=>{
    const[people,setPeople]=useState(Data)
  
    return( 
        <>
        <h1>{people.length}</h1>
        <List people={people}/>
         <button onClick={()=>{setPeople([])}}>Clear All</button>
        </>
    )
}
ReactDOM.render(<Breminder/>,document.getElementById("root"))