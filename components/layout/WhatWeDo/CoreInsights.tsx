import React from 'react'
import { ContentInterface } from '../../../types'
import Image from 'next/image'


const CoreInsights: React.FC<ContentInterface> = ({  icon ,heading, paragraph }) => {
  return (
    
    <div className='mt-12 sm:mt-0 sm:px-3'>
      <div className='mb-[25px]'>
        <Image src={icon} alt={heading} height={60} width={60}  />
      </div>

    <h3 className="font-semibold text-[26px] xl:text-[30px] capitalize text-white transition-colors duration-500 delay-100 ease-in-out hover:text-themeColor mb-[10px] text-left">
      {heading}
    </h3>
    <p className="font-light text-[15px] tracking-wide leading-[30px] text-paraColor">
      {paragraph}
    </p>
  </div>
    
  )
}

export default CoreInsights