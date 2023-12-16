import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShoptContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import "./CSS/product.css"
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import ReleatedProducts from '../Components/RelatedProducts/ReleatedProducts';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {id} = useParams();
    const product = all_product.find((e)=> e.id === Number(id))
  return (
    <div className='product_main'>
        
      <Breadcrums product = {product}/>
        
      <ProductDisplay product={product}/>

      <DescriptionBox/>

      <ReleatedProducts/>

    </div>
  )
}

export default Product;
