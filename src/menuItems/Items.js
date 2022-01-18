import React from 'react'

const Items = ({menu})=>{
    console.log(menu);
    return (
        <section className='item_container'>
            {menu.map((item)=>{
                const{id,img,title,price,desc,cateogry}=item
                return (
                    <article key={id} className='item_container_info'>
                        <figure>
                            <img src={img}/>
                        </figure>
                        <div className='info_item_header'>
                            <h4 className='title'>{title}</h4>
                            <h4 className='price'>{price}</h4>
                        </div>
                        <p className='item_desc'>
                            {desc}
                        </p>
                    </article>
                )
            })

            }
        </section>
    )
}

export default Items