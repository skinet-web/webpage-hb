import React from 'react'

const Button = ({styles, buttonClick}) => {
  return (
    <button type='button' className={`bg-blue-gradient rounded 
    font-medium py-4 px-6 text-[18px] font-poppins ${styles}` } onClick={buttonClick}>
    Get Started
    </button>
  )
}

export default Button