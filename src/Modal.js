 import {useEffect , useRef } from "react"
import { createPortal } from "react-dom/cjs/react-dom.development"
function Modal({children}) {
   const elref=useRef(null)
  //  check if elref exist if not then create a div to reference it 
   if(!elref.current){
     elref.current=document.createElement("div")
     elref.current.setAttribute('id','modal-container-nested-1')
   }

   useEffect(()=>{
     console.log("modal effect")
    //  accessing the root elem of modal 
     const modalRoot=document.getElementById("modal-container")
    //  appending the elreff element
     modalRoot.appendChild(elref.current)
    //  returning the clean up function
     return ()=>modalRoot.removeChild(elref.current)
   },[])
  //  it is to insert chlidren from the indivdual component to modal dom element 
  return createPortal(<div id="modal-container-nested-2">{children}</div>,elref.current)
}

export default Modal