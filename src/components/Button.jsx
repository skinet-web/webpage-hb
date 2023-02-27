import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`bg-blue-gradient rounded 
    font-medium py-4 px-6 text-[18px] font-poppins ${styles}`}>
    Get Started
    </button>
  )
}

export default Button