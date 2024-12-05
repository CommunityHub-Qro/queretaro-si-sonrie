'use client'
import React, { FC } from 'react'

interface DecorationProps {
  color1: string,
  color2: string,
  color3?: string,
  rotation?: string,
  className: string
}

interface IconProps {
  img: string,
}

export const Decorations: FC<DecorationProps> = ({color1, color2, rotation, color3, className}) => {
  return (
    <div className={`absolute -z-10 ${rotation ? parseInt(rotation) < 0 ? '-rotate-45' : 'rotate-45' : ''} ${className}`}>
      <div className={`w-full sm:w-[30rem] md:w-[45rem] h-16 rounded-full ${color1 === 'fourth' ? 
        'bg-fourth' : color1 === 'fifth' ? 'bg-fifth' : 'bg-third'}`} />
      <div className={`w-full sm:w-[30rem] md:w-[45rem] h-16 rounded-full relative left-20 -top-3 ${color2 === 'fourth' ? 
        'bg-fourth' : color2 === 'fifth' ? 'bg-fifth' : 'bg-third'}`} />   
      {color3 ? 
        <div className={`w-full sm:w-[30rem] md:w-[45rem] h-16 rounded-full relative -left-20 -top-3 ${color3 === 'fourth' ? 
        'bg-fourth' : color3 === 'fifth' ? 'bg-fifth' : 'bg-third'}`} /> : null}
    </div>
  )
}

export const Icon: FC<IconProps> = ({img}) => {
  return (
    <div className='w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-dashed border-black border-4 flex items-center justify-center'>
      <img src={'images/' + img} className='w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20' />
    </div>
  )
}
