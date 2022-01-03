import React from "react";

const List =({people})=>{
    console.log({people});
 
    return(
      <>
          {
              people.map((person)=>{
                const{id,name,age,image}=person
                // console.log(id,name,age,image);
              return  <article key={id}>
                  <figure> <img src={image}/></figure>
                  <div>
                      <h3>{name}</h3>
                      <p>{age}</p>
                  </div>
              </article>
              })
          }
      </>
    )
}

export default List