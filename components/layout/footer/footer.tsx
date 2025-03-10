import React from 'react'
import Link from 'next/link'

export default function footer() {
  return (
    <div className='mt-8 flex justify-between items-center sm:mx-auto mx-5 max-w-screen-sm'>
      <div>
         <p>Lucas • 2025</p>
      </div>

      <div className='flex items-center gap-3'>
         <Link className='hover:underline' href='/'>Github</Link>
         <Link className='hover:underline' href='/'>LinkedIn</Link>
         <Link className='hover:underline' href='/'>Malt</Link>
      </div>
    </div>
  )
}
