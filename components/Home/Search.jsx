"use client"
import React, { useContext, useEffect } from 'react'
import Input from './Input'
import { SourceContext } from '@/context/SourceContext';
import { DestinationContext } from '@/context/DestinationContext';

function Search() {
  const {source, setSource} = useContext(SourceContext);
  const {destination, setDestination} = useContext(DestinationContext);

  useEffect(() => {
    if (source) {
      console.log(source);
    }
  }, [source])

  return (
    <div className='p-2 md:p-6 border-[2px] rounded-xl'>
      <p className='text-[20px] font-bold'>Get a ride</p>
      <Input type='source'/>
      <Input type='destination'/>

      <button className='bg-black p-3 w-full mt-5 text-white rounded-lg'>Search</button>
    </div>
  )
}

export default Search