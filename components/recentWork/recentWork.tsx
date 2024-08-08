import Image from 'next/image'
import React from 'react'

import Naxt from '../../public/images/naxt.webp'

export default function recentWork() {
  return (
    <div className='border'>
      <h3>Mon dernier projet</h3>
      <Image src={Naxt} alt="Picture of the author" className='w-fit' width={1920} height={1080} />
    </div>
  )
}
