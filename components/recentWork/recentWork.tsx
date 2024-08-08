import React from 'react'
import {Image} from "@nextui-org/image";

export default function recentWork() {
  return (
    <div>
      <h3>Mon dernier projet</h3>
      <Image
      isBlurred
      width={1200}
      alt="NextUI Fruit Image with Zoom"
      src="images/naxt.webp"
      className='w-fit'
    />   </div>
  )
}
