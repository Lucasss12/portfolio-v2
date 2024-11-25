import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  url: string
  target?: string
  size: 'small' | 'base' 
}

export default function button({ children, url, target, size="base" }: ButtonProps) {
  const paddingClasses = {
    small: 'py-1 px-2 text-sm',
    base: 'px-5 py-3 text-base font-medium',
  }

  return (
    <Link href={url} target={target}>
      <button className={`group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black ${paddingClasses[size]} text-white transition-transform duration-300`}>
        <div className="relative">
          <div className="text-white translate-y-0 transition-transform duration-300 sm:group-hover:-translate-y-[150%] flex items-center">
            {children}
          </div>

          <div className="text-white absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 sm:group-hover:translate-y-0">
            {children}
          </div>
        </div>
      </button>
    </Link>
  )
}