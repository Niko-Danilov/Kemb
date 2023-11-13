import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface IItem {
  img: StaticImageData,
  title: string,
  text: string
}

const HomeItem: FC<IItem> = ({ img, title, text }) => {



  return (
    <div className='md:max-w-[264px]'>
      <div className='flex items-center gap-4 py-4'>
        <Image src={img} alt="svg" />
        <h2 className='text-base font-bold text-[#156963] max-w-[137px]'>{title}</h2>
      </div>
      <div className='text-[10px] leading-4 font-normal'>{text}</div>
    </div>

  )
}

export default HomeItem