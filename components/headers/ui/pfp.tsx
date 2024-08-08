import Image from 'next/image'
import React from 'react'

import icon from '../../../public/images/icon.png'

export default function pfp() {
  return (
   <div className='flex flex-col items-center mb-44'>
      <Image src={icon} alt="Pfp Lucas" width={140} height={140} />
      <p className='flex items-center bg-gradient-to-t top-10 from-gradiantAccentBlue to-gradiantBlue px-10  h-[28px] rounded-[11px] text-white inner-shadow mt-[-15px]'>Lucas</p>
   </div>
  )
}