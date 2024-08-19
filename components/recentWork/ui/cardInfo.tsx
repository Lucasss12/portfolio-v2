import React from 'react'

type CardInfoProps = {
   title: string
   }

export default function cardInfo({ title }: CardInfoProps) {
  return (
   <p className="py-1 px-2 bg-black text-white text-xs rounded w-fit">
      {title}
   </p>
  )
}
