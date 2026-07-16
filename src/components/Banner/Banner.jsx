import React from 'react'

const Banner = ( {title,bgImage} ) => {
  return (
    <div className='h-[50vh] mt-28 flex justify-center items-center bg-center bg-cover relative'
    style={{backgroundImage : `url(${bgImage})`}}>
      <h3 className='text-3xl font-bold bg-white p-5 rounded-xl text-zinc-800 z-10'>{title}</h3>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner
