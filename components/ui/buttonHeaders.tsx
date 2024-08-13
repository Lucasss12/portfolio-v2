import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ButtonHeadersProps = {
  text: string
  svg: string
  rotate?: boolean
  url: string
}

export default function ButtonHeaders({ text, svg, rotate, url }: ButtonHeadersProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <span className='inline-flex items-center border border-slate-200 px-1 py-0,5 bg-slate-50 bg-opacity-70 rounded-md mx-1 hover:bg-slate-100'>
        <Image src={svg} alt={text} width={16} height={16} className={`mr-1 ${rotate ? 'spin-slow' : ''}`}  />
        {text}
      </span>
    </Link>
  )
}
