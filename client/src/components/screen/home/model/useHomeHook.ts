import { useAddItemMutation } from "@/api/api"
import { useActions } from "@/hooks/useActions"
import { useMarket } from "@/hooks/useMarket"
import { StaticImageData } from "next/image"
import { useCallback, useRef, useState } from 'react'
import Swiper from "swiper"

interface IProduct {
  id: number,
  img: StaticImageData,
  title: string,
  price: string | number,
}

function useHomeState() {
  const [list, setList] = useState<number>(0)

  const priceFormatter = new Intl.NumberFormat()
  const swiperRef = useRef<Swiper>(null)

  const { market } = useMarket()

  const { addToMarket } = useActions()

  const [addItem, { isError }] = useAddItemMutation()
  if (isError) {
    console.log('error')
  }



  const handleAddToMarket = useCallback(async (item: IProduct, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // Redux toolkit
    // addToMarket(item)
    console.log(item)

    await addItem({ title: `${item.title}`, image: `${item.img.src}`, price: `${item.price}` })
  }, [])

  return { market, swiperRef, handleAddToMarket, list, setList }

}

export default useHomeState