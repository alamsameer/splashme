import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'

const App = ()=>{
    const [input,setInput] = useState("## write the markdown above/beside")
    return (
        <>
          <section className='conatainer flex '>
              <textarea className='w-50 h-100' id='editor' onChange={(e)=>{setInput(e.target.value)}}>

              </textarea>
              <article id='preview' className='w-50 h-100'>
                  <ReactMarkdown children={input}/>
              </article>
          </section>
        </>
    )
}

ReactDOM.render(<App/>,document.querySelector("#markdon-container"))