import Image from 'next/image'
import { FC } from 'react'
import descriptImg1 from './../../../../../public/descript__img1.jpg'
import descriptImg2 from './../../../../../public/descript__img2.jpg'


const HomeDescription: FC = () => {
  return (
    <div className='md:flex justify-between gap-2'>
      <div className='basis-[522px]'>
        <h2 className='text-[24px] md:text-[40px] font-bold pb-4'>Buy more plants, it helps you to be relaxed</h2>
        <div className='text-base leading-7 pb-7'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.
        </div>
        <div className='relative pb-[50%] md:relative md:w-full md:pb-[70%]'>
          <Image src={descriptImg1} alt='Картинка' width={612} height={352}
            className='absolute top-0 left-0 w-full h-full object-cover md:absolute md:top-0 md:left-0 md:w-full md:h-full md:object-contain' />
        </div>
      </div>
      <div className=' relative basis-[522px] mt-5 pb-[100%] md:basis-[522px] md:relative md:pb-[400px]'>
        <Image src={descriptImg2} alt='Картинка' width={512} height={733} className='absolute top-0 left-0 w-full h-full object-cover object-bottom' />
      </div>
    </div>
  )
}

export default HomeDescription