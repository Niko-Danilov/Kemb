import UiButton from '@/components/uiGlobal/uiButton/UiButton'
import Image from 'next/image'
import { FC } from 'react'
import visitImg from './../../../../../public/visit_img.jpg'



const HomeVisit: FC = () => {
  return (
    <div className='flex gap-2 justify-between items-start'>
      <div className='basis-[585px]'>
        <h2 className='text-[24px] md:text-[40px] font-bold pb-8'>
          Get your favourites plant on our shop now
        </h2>
        <UiButton state='white' modal=''>
          Visit Shop
        </UiButton>
      </div>
      <div className='relative basis-[404px] pb-[0px] md:pb-[30%] basis-[404px] '>
        <Image src={visitImg} alt='Картинка' width={405} height={535} className='md:absolute top-0 left-0 w-full h-full object-cover ' />
      </div>
    </div>
  )
}

export default HomeVisit