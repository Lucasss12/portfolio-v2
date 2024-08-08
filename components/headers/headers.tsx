import React from 'react'
import Available from './ui/available'
import CatchPhrase from './ui/catchPhrase'
import Pfp from './ui/pfp'

export default function headers() {
  return (
    <div className='flex flex-col items-center border'>
      <Available />
      <CatchPhrase />
      <Pfp />
    </div>
  )
}
