'use client'
import Image from 'next/image'
import { FC, MutableRefObject } from 'react'
import { Swiper as SwiperRef } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import { EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import mainImage from '../../../../../public/main__img.jpg'
import HomeSliderButton from './HomeSliderButton'


interface IHomeSlider {
  pref: MutableRefObject<SwiperRef | null>
}

const HomeSlider: FC<IHomeSlider> = ({ pref }) => {



  return (

    <Swiper
      // install Swiper modules
      modules={[Navigation, EffectFade]}
      effect={'fade'}
      spaceBetween={50}
      slidesPerView={1}
      onBeforeInit={(swiper) => {
        pref.current = swiper;
      }}
      className='mySwiper'
    >
      <SwiperSlide>
        <div className='w-full flex flex-col min-h-screen -z-10 relative h-0 md:flex-row gap-2'>
          <div className='absolute top-0 left-0 bottom-0 right-0 flex  md:flex basis-[47.5%] relative'>
            <Image
              src={mainImage}
              alt='Картинка'
              className='absolute top-0 left-0 w-full h-full object-cover'
            />
          </div>
          <div className='flex absolute bottom-0 left-0 bg-white z-20 md:flex basis-[52.5%] flex-col justify-center items-center relative'>
            <h1
              className='text-[#156963] font-medium text-[24px] pb-6 max-w-[523px] lg:text-[68px] md:text-[46px] sm:text-[32px]'
            >
              Kembang Flower Mantap-1
            </h1>
            <div className='font-normal text-sm leading-8 max-w-[493px] pb-28 lg:text-2xl sm:text-xl'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div className='flex absolute bottom-0 left-0 w-full'>

              {/* Кнопки под слайдер */}
              <HomeSliderButton state='left' onClick={() => pref.current?.slidePrev()}>
                Kembang Flower Mantap-4

              </HomeSliderButton>
              <HomeSliderButton state='right' onClick={() => pref.current?.slideNext()}>
                Kembang Flower Mantap-2

              </HomeSliderButton>

            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full flex flex-col min-h-screen -z-10 relative h-0 md:flex-row gap-2'>
          <div className='absolute top-0 left-0 bottom-0 right-0 flex  md:flex basis-[47.5%] relative'>
            <Image
              src={mainImage}
              alt='Картинка'
              className='absolute top-0 left-0 w-full h-full object-cover'
            />
          </div>
          <div className='flex absolute bottom-0 left-0 bg-white z-20 md:flex basis-[52.5%] flex-col justify-center items-center relative'>
            <h1
              className='text-[#156963] font-medium text-[24px] pb-6 max-w-[523px] lg:text-[68px] md:text-[46px] sm:text-[32px]'
            >
              Kembang Flower Mantap-2
            </h1>
            <div className='font-normal text-sm leading-8 max-w-[493px] pb-28 lg:text-2xl sm:text-xl'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div className='flex absolute bottom-0 left-0 w-full'>

              {/* Кнопки под слайдер */}
              <HomeSliderButton state='left' onClick={() => pref.current?.slidePrev()}>
                Kembang Flower Mantap-1

              </HomeSliderButton>
              <HomeSliderButton state='right' onClick={() => pref.current?.slideNext()}>
                Kembang Flower Mantap-3

              </HomeSliderButton>

            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full flex flex-col min-h-screen -z-10 relative h-0 md:flex-row gap-2'>
          <div className='absolute top-0 left-0 bottom-0 right-0 flex  md:flex basis-[47.5%] relative'>
            <Image
              src={mainImage}
              alt='Картинка'
              className='absolute top-0 left-0 w-full h-full object-cover'
            />
          </div>
          <div className='flex absolute bottom-0 left-0 bg-white z-20 md:flex basis-[52.5%] flex-col justify-center items-center relative'>
            <h1
              className='text-[#156963] font-medium text-[24px] pb-6 max-w-[523px] lg:text-[68px] md:text-[46px] sm:text-[32px]'
            >
              Kembang Flower Mantap-3
            </h1>
            <div className='font-normal text-sm leading-8 max-w-[493px] pb-28 lg:text-2xl sm:text-xl'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>

            <div className='flex absolute bottom-0 left-0 w-full'>
              {/* Кнопки под слайдер */}
              <HomeSliderButton state='left' onClick={() => pref.current?.slidePrev()}>
                Kembang Flower Mantap-2

              </HomeSliderButton>
              <HomeSliderButton state='right' onClick={() => pref.current?.slideNext()}>
                Kembang Flower Mantap-4

              </HomeSliderButton>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full flex flex-col min-h-screen -z-10 relative h-0 md:flex-row gap-2'>
          <div className='absolute top-0 left-0 bottom-0 right-0 flex  md:flex basis-[47.5%] relative'>
            <Image
              src={mainImage}
              alt='Картинка'
              className='absolute top-0 left-0 w-full h-full object-cover'
            />
          </div>
          <div className='flex absolute bottom-0 left-0 bg-white z-20 md:flex basis-[52.5%] flex-col justify-center items-center relative'>
            <h1
              className='text-[#156963] font-medium text-[24px] pb-6 max-w-[523px] lg:text-[68px] md:text-[46px] sm:text-[32px]'
            >
              Kembang Flower Mantap-4
            </h1>
            <div className='font-normal text-sm leading-8 max-w-[493px] pb-28 px-2 lg:text-2xl sm:text-xl'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>

            <div className='flex absolute bottom-0 left-0 w-full'>
              {/* Кнопки под слайдер */}
              <HomeSliderButton state='left' onClick={() => pref.current?.slidePrev()}>
                Kembang Flower Mantap-3

              </HomeSliderButton>
              <HomeSliderButton state='right' onClick={() => pref.current?.slideNext()}>
                Kembang Flower Mantap-1

              </HomeSliderButton>

            </div>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>

  )
}

export default HomeSlider