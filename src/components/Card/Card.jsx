import { Heart, Plus } from 'lucide-react'
import React from 'react'
import Button from '../Button/Button'

const Card = ({image,title,price}) => {
  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>

      <div className='flex justify-between'>
         <span className=" text-orange-500 ">
             <Heart size={30}/>
         </span>
         <button className="flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 md:h-13 md:w-13 h-11 w-11 rounded-full text-white hover:scale-105 transition-all duration-400 ">
             <Plus size={30}/>
         </button>
      </div>

      <div className='flex  hover:scale-112 transition-all duration-500 h-50 w-full justify-center items-center'>
        <img src={image} className='h-full w-full object-contain' />
      </div>

      <div className='flex flex-col justify-center items-center mt-4'>
        <h3 className='text-2xl text-zinc-800 font-semibold'>{title}</h3>
        <p className='text-xl text-zinc-800 mt-2 mb-2 font-bold'>₹{price}</p>
        <Button content="Shop Now" />
      </div>

    </div>
  )
}

export default Card
