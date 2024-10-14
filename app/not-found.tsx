import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className='sm:mx-auto mx-5 max-w-screen-sm mb-44 h-96 flex flex-col space-y-6'>
      <h1 className='text-2xl font-medium'>
        Oups ! La page que vous cherchez n&apos;existe pas.
      </h1>
      <Link href='/' className='px-4 py-2 rounded-2xl bg-black text-white w-fit'>
        Retour sur la page d&apos;accueil
      </Link>
    </div>
  )
}
