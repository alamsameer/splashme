import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import Image from './Image'
export default function ImageContainer() {
    const [img, setimg] = useState([])
 useEffect(()=>{
     const getImgs= async()=>{
          const imgs=await axios.get("https://mysplash.vercel.app/").then((res)=>res.data).catch((e)=>{console.log(e);})
          console.log(imgs);
          setimg(imgs)
     }
     getImgs()
 },[])
//  console.log(img.length)
  return (
    <div style={{padding:"1.2rem 1.6rem "}} className="img-container">
      <div>
      {
            img == undefined?<div>Loading...</div>:
      img.slice(0,3).map((elem)=>{
          const {label,url}=elem
          return <Image key ={label} label={label} src={url} />
      })
  }

      </div>
      <div>
      {
            img == undefined?<div>Loading...</div>:
      img.slice(3,6).map((elem)=>{
          const {label,url}=elem
          return <Image key ={label} label={label} src={url} />
      })
  }

      </div>
      <div>
      {
            img == undefined?<div>Loading...</div>:
      img.slice(6,9).map((elem)=>{
          const {label,url}=elem
          return <Image key ={label} label={label} src={url} />
      })
  }

      </div>
      <div>
      {
            img == undefined?<div>Loading...</div>:
      img.slice(9,12).map((elem)=>{
          const {label,url}=elem
          return <Image key ={label} label={label} src={url} />
      })
  }

      </div>
      <div>
      {
            img == undefined?<div>Loading...</div>:
      img.slice(24,32).map((elem)=>{
          const {label,url}=elem
          return <Image key ={label} label={label} src={url} />
      })
  }

      </div>
    </div>
 
  )
}
