import Image from 'next/image'
import React from 'react'

function Input() {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <Image src='/uber.logo.png' width={15} height={15} alt='Logo' />  
      <input type="text" name="" placeholder="Pickup Location" className='bg-transparent w-full outline-none' />
    </div>
  )
}

export default Input