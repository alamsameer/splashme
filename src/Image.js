import Modal from "./Modal"
import {useState} from "react"
import axios from "axios"
export default function Image({label,src}) {
   const [isDelete,setDelete]=useState(false)
   const [isSure,setSure]=useState(false)

   const handleDelete=()=>{ 
     const isDeleted =!isDelete
       setDelete(isDeleted) 
   }
   const handleSure=()=>{
 setSure(true)
 setDelete(false)
}
 const deleteme=async ()=>{
    await axios.delete(`https://mysplash.vercel.app/delete?label=${label}`)
 }
if(isSure){
    deleteme()
    setTimeout(() => {
      location.reload()
    }, 1000);
}

console.log("isSure",isSure);
  return (
    <div className="img" style={{position:"relative "}}>
        <img src={src} alt={label}  />
        <p className="img-ps-ab img-label">{label}</p>
         <button className=" img-ps-ab img-btn delete-btn btn" onClick={handleDelete}>
             deleteme
         </button>
{
    isDelete?<Modal>
     <div className="btn-confirm-container">
     <p className="isSure">are you sure </p>
      <div className="btn-container">
      <button  className="btn" onClick={handleSure}>yes</button>
     <button className="btn"  onClick={handleDelete}>No</button>
      </div>
     </div>
</Modal>:null
}
        
    </div>
  )
}
