import React from 'react'
import './ReleatedProducts.css'

import data_product from '../Assets/data'
import Item from '../Items/Items'

const ReleatedProducts = () => {
  return (
    <div className='releatedproducts'>
        <h1>
            Releated Products
        </h1>
        <hr />

        <div className="releatedproducts-item">

            {data_product.map((item,i) => {

                return <Item key={i} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}

        </div>

      
    </div>
  )
}

export default ReleatedProducts
