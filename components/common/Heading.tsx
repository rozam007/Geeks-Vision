import React from 'react'
import { HeadingProps } from '@/types'

const Heading: React.FC<HeadingProps> = ({ size, weight }) => {

  const fontWeightClasses = {
    'thin': 'font-thin',
    'light': 'font-light',
    'normal': 'font-normal',
    'medium': 'font-medium',
    'semibold': 'font-semibold',
    'bold': 'font-bold',
    'extrabold': 'font-extrabold',
    'black': 'font-black',
  };

  const fontWeightClass = fontWeightClasses[weight] || 'font-normal';

  
  const fontSizeStyle = typeof size === 'string' && size.endsWith('px')
    ? { fontSize: size }
    : undefined;

  return (
    <div className='relative h-[90px] flex justify-center items-end lg:text-center sm:text-start mb-14'>
    <span className={`text-[110px] text-headingColor font-bold uppercase leading-none md:tracking-wide w-full absolute lg:left-2/4 bottom-0 transforn -translate-x-1/2 xs:hidden md:block md:left-[60%]`}>Contact</span>
    <h2 className={`leading-none ${fontWeightClass}`} style={fontSizeStyle}>
    Contact</h2>
    </div>
  )
}

export default Heading