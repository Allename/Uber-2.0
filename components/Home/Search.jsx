import React from 'react'
import Input from './Input'

function Search() {
  return (
    <div className='p-2 md:pd-6 border-[2px] rounded-xl'>
      <p className='text-[20px] font-bold'>Get a ride</p>
      <Input />
      <Input />
    </div>
  )
}

export default Search