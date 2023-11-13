import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface IProduct {
  id: number,
  img: StaticImageData,
  title: string,
  price: string | number,
}

interface IProductItem {
  // onClick: (item: IProduct) => void
  onClick: (item: IProduct, e: React.MouseEvent<HTMLButtonElement>) => void
  market: IProduct[]
  item: IProduct
}

const HomeProduct: FC<IProductItem> = ({ item, market, onClick }) => {

  const isExist: boolean = market.some((p) => p.id === item.id)


  return (
    <div className='flex flex-col basis-[200px] text-center gap-3 mb-12'>
      <div className='pb-[80%] md:w-full relative md:pb-52'>
        <Image src={item.img} alt='Картинка' className='absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full' />
      </div>
      <div className='text-base font-normal'>
        {item.title}
      </div>
      <div>
        IDR {item.price}
      </div>
      <button onClick={(e) => onClick(item, e)}>
        {isExist ? 'added' : 'add'} to card
      </button>
    </div>
  )
}

export default HomeProduct