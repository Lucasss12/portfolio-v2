import React from 'react'
import Link from 'next/link'

export default function footer() {
  return (
    <div className='mt-12 flex justify-between items-center'>
      <div>
         <p>Lucas • 2024</p>
      </div>

      <div className='flex items-center gap-2'>
         <Link className='hover:text-secondaryText hover:underline' href='/'>Github</Link>
         <Link className='hover:text-secondaryText hover:underline' href='/'>LinkedIn</Link>
         <Link className='hover:text-secondaryText hover:underline' href='/'>Malt</Link>
      </div>
    </div>
  )
}