import React from 'react'

const IconCard = (props) => {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img src={props.icon} alt={props.name} className='w-20 mx-auto'/>
    <p className='my-4'>{props.name}</p>
</div>
  )
}

export default IconCard