import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ToolTipProps = {
  text: string
  svg: string
  rotate?: boolean
  url: string
}

export default function ToolTip({ text, svg, rotate, url }: ToolTipProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <span className='text-black inline-flex items-center border border-slate-200 p-1 bg-mainBg bg-opacity-50 rounded-md mx-1'>
        <Image src={svg} alt={text} width={16} height={16} className={`mr-1 ${rotate ? 'spin-slow' : ''}`}  />
        {text}
      </span>
    </Link>
  )
}
