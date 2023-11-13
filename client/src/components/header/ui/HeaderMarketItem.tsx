import { StaticImageData } from 'next/image'
import { FC } from 'react'

interface IProduct {
  id: number,
  img: StaticImageData,
  title: string,
  price: string | number,
}


interface IProductItem {
  item: IProduct,
  onClick: (id: number, e: React.MouseEvent<HTMLButtonElement>) => void,
  id: number
}


const HeaderMarketItem: FC<IProductItem> = ({ id, item, onClick }) => {



  return (
    <div className="w-full border-2 py-5 flex items-center justify-between">
      <div className='flex items-center gap-8'>
        <img src={item.image} alt={item.title} width={100} height={100} />
        <div className='text-2xl'>
          {item.title}
        </div>
      </div>

      <button onClick={(e) => onClick(item.id, e)}>
        Delete
      </button>
    </div>
  )
}

export default HeaderMarketItem