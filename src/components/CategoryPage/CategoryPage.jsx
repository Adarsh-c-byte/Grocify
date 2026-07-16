import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Card from '../Card/Card'
import Headings from '../Headings/Headings'

const CategoryPage = ({title , bgImage, categories = []}) => {

  let filteredItems = categories.includes("All")
  ? ProductList
  : ProductList.filter((item)=> categories.includes(item.category))

const renderProduct = filteredItems.map(product=>{
    return(
        <Card image={product.image} title={product.title} price={product.price} key={product.id} />
    )
})

  return (
    <div>
       <Banner title={title} bgImage={bgImage} />
       
       <div className='grid md:grid-cols-4 grid-cols-1 gap-9 mt-20 max-w-[1400px] mx-auto px-10'>
        {renderProduct}
       </div>
    </div>
  )
}

export default CategoryPage
