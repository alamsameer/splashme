import React,{useRef} from 'react';

const DrumBtn =({keyTrigger,src,className,setDisplay,id})=>{
     const audio=useRef(null)
     function pointAudio(){
         console.log(audio.current);
             console.log(keyTrigger);
             audio.current.play()
             
     }
     function global(){
         window.addEventListener('keydown',(e)=>{
             console.log(e.key == `${keyTrigger.toLowerCase()}`);
          if(e.key == `${keyTrigger.toLowerCase()}`){
            audio.current.play()
            setDisplay(id)
          }
         
         })
     }
     global()
      return(
          <div className={className}>
              <audio className='clip' id={keyTrigger} ref={audio} src={src}></audio>
            <button onClick={pointAudio}>{keyTrigger}</button>
          </div>
      )
}

export default DrumBtn 