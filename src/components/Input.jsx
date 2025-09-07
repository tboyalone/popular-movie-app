import React from 'react'

const Input = ({onChange, value}) => {
  return (
    <div>
      <input type="text" name='search' id='search' className='w-80 border-2 border-gray-200 rounded-2xl p-2 text-white' placeholder='Search for a movie' onChange={onChange} value={value}/>
    </div>
  )
}

export default Input
