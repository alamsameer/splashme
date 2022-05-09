import React, { useState } from 'react'
import { FaUnsplash } from "react-icons/fa";
import Modal from './Modal';
import axios from 'axios';


export default function Navbar() {
     const [isImg,setImg]=useState(false)
     const [label,setLabel]=useState('')
     const [url,setUrl]=useState('')
     const addPhoto=()=>{
       setImg(true)
         console.log("add phtoo");
     }
     const uploadImg=()=>{
      setImg(false)
      if(label && url){
      let userUploadImg={
        label:label,
        url:url
      }
      axios.post('https://mysplash.vercel.app/upload',userUploadImg).then((data)=>console.log(data)).catch((e)=>{
        console.log(e);
      })
    //  location.reload()
     setTimeout(() => {
       location.reload()
     }, 1000);
    }
      else{
        alert("please fill the input correctly")
      }
     }
     const handleInputLabel=(event)=>{
       setLabel(event.target.value)
       console.log('label');
     }
     const handleInputLink=(event)=>{
      setUrl(event.target.value)
      console.log('url');
    }
  return (
    <div className='nav-header'>
       <div style={{display:"flex"}}>
         <figure className="logo-container">
             <FaUnsplash className='logo'/> <span className='logo'>MySplash</span>
         </figure>
       </div>
       <button className='main-btn btn'onClick={addPhoto}>  Add photo </button>
       {
         isImg?  <Modal>
           <div id='modal-container-nested-3'>
              <label htmlFor="label">
                <span className='image-input-label'> Add label to Image </span>
                <input type="text" name='label'value={label} onChange={handleInputLabel} placeholder='label' required />
              </label>
                <label htmlFor="link">
                <span className='image-input-label'>Add Image Link </span>
                <input type="text" name='link' onChange={handleInputLink}  placeholder='Image link'required />
                </label>
             <div className="btn-container">
                 <button className='btn add-btn btn-cancel' onClick={()=>{setImg(false)}}>cancel</button>
                <button className='btn add-btn btn-done' onClick={uploadImg}>done</button>
             </div>
           </div>
         
     </Modal>:null
       }
    
    </div>
    
  )
}
