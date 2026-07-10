import React from 'react'
import Button from '../Button/Button'
import FreshFruit from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-200 bg-contain bg-no-repeat bg-right' style={{backgroundImage:`url(${FreshFruit})`}}>

        <div className='flex max-w-[1400px] mx-auto px-10 py-10'>

            <span 
               className='text-9xl text-orange-500 font-bold transform -rotate-90 h-fit self-center'>
                20%
            </span>

            <div className='max-w-[700px]'>

                <h3 className='text-7xl font-bold text-zinc-800'>
                    First Order Discount!
                </h3>

                <p className='text-zinc-600 my-5'>
                    Enjoy an exclusive first order discount on our grocery wevsite! shop fresh essentials and save big on your first purchese , fast deliver and quality guaranteed.
                </p>

                <Button content="Get a Discount" />

            </div>
            
        </div>
    </section>
  )
}

export default Discount
