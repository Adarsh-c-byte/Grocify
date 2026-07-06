import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white md:text-lg text-md md:px-8 md:py-3 px-5 py-2 rounded-lg hover:scale-105 transition-all duration-300 hover:to-orange-600 cursor-pointer'>
        {props.content}
    </button>
  )
}

export default Button
