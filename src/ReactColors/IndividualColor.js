
import React,{ useState,useEffect } from 'react'
 function IndividualColor({index,type,weight,rgb,hex}) {
     const[copied,setCopied]=useState(false)
     console.log();
     const copy =()=>{
         setCopied(true)
         console.log(hex);
         navigator.clipboard.writeText(hex);
     }
     useEffect(()=>{
         setTimeout(()=>{
             setCopied(false)
         },2000)
     },[copied])
    return (
        <div onClick={copy} className={`${index>14?'color':'color-light'} wall`}  style={{backgroundColor:`rgb(${rgb.join(',')})`}}>
           <p>{weight}%</p>
           <p> <strong> #{hex}</strong></p>  
           {copied && <p style={{color:'gray',opacity:0.5}}>copied to clipboard</p>} 
        </div>
    )
}

export default IndividualColor