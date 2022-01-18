import React from 'react'

const Categories =({category,filterItems})=>{
    console.log(category);
    return (
         <div className='category_container'>
             {category.map((each,index)=>{
               return  <button className='category_btn' onClick={()=>filterItems(category[index])} key={index}>{each}</button>
             })
             }
         </div>
    )
}

export default Categories