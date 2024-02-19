import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  const headerMenu = [
    {
      id: 1,
      name: 'Ride',
      icon: '/taxi.jpeg'
    },
    {
      id: 2,
      name: 'Package',
      icon: '/box.png'
    }
  ]
  return (
    <div className='p-5 pb-3 pl-10 border-b-[4px] border-gray-200 flex items-center justify-between'>
      <div className='flex gap-24 items-center'>
        <Image src='/uber.logo.png' width={70} height={70} alt='Logo' />
        <div className='flex gap-6 items-center'>
          {headerMenu.map((menu) => (
            <div key={menu.id} className='flex gap-2 items-center'>
              <Image src={menu.icon} width={17} height={17} alt='icon' />
              <h2 className='text-[14px] font-medium'>{menu.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <UserButton />
    </div>
  )
}

export default Header