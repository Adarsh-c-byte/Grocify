import React from 'react'

const Headings = (props) => {
  return (
    <div className='w-fit m-auto'>
      <h2 className='md:text-5xl text-3xl font-bold'><span className='text-orange-500'>{props.highlight}</span>{props.headings}</h2>
      <div className='md:w-35 h-1 w-25 bg-orange-500 md:mt-5 mt-3 ml-auto'></div>
    </div>
  )
}

export default Headings
