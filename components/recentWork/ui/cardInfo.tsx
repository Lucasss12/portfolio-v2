import React from 'react'

type CardInfoProps = {
   title: string
   }

export default function cardInfo({ title }: CardInfoProps) {
  return (
   <p className="py-1 px-2 bg-black text-white text-xs rounded w-fit hover:-translate-y-1 transform transition duration-200">
      {title}
   </p>
  )
}
