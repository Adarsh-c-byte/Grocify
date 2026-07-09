import { Heart, Plus } from 'lucide-react'
import React from 'react'
import Button from '../Button/Button'

const Card = ({image,title,price}) => {
  return (
    <div className='bg-zinc-100 p-5'>

      <div className='flex justify-between'>
         <span className=" text-orange-500 ">
             <Heart size={30}/>
         </span>
         <span className="flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 md:h-14 md:w-14 h-12 w-12 rounded-full text-white ">
             <Plus size={30}/>
         </span>
      </div>

      <div className='flex  hover:scale-112 transition-all duration-500 h-65 w-full justify-center items-center'>
        <img src={image} />
      </div>

      <div className='flex flex-col justify-center items-center mt-2'>
        <h3 className='text-2xl text-zinc-800 font-bold'>{title}</h3>
        <p className='text-xl text-zinc-800'>{price}</p>
        <Button content="Shop Now" />
      </div>

    </div>
  )
}

export default Card
