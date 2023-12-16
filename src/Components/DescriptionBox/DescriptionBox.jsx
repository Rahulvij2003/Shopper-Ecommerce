import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>

            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>

        <div className="descriptionbox-description">
            <p>An eCommerce website is an online platform that facilitates the buying and selling of goods or services over the Internet. T
                he term "eCommerce" stands for electronic commerce, 
                and it involves conducting commercial activities such as buying and selling products or services electronically, typically through a website.
            </p>
            <p>
            Overall, eCommerce websites have become a crucial part of the modern business landscape,
             allowing businesses to reach a global audience and conduct transactions efficiently in the digital realm.

            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
