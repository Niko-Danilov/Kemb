'use client'
import React, { FC } from "react"
import { ADVANTAGES, MARKETPRODUCT } from './const.js'
import useHomeState from "./model/useHomeHook"
import HomeDescription from "./ui/HomeDescription"
import HomeItem from "./ui/HomeItem"
import HomeLayout from "./ui/HomeLayout"
import HomeProduct from "./ui/HomeProduct"
import HomeSelect from "./ui/HomeSelect"
import HomeSlider from "./ui/HomeSlider"
import HomeVisit from "./ui/HomeVisit"


const Home: FC = () => {
  const { market, list, swiperRef, setList, handleAddToMarket, } = useHomeState()


  const HomeSliderMemo = React.memo(HomeSlider)
  const HomeItemMemo = React.memo(HomeItem)
  const HomeProductMemo = React.memo(HomeProduct)
  const HomeDescriptionMemo = React.memo(HomeDescription)
  const HomeVisitMemo = React.memo(HomeVisit)
  const HomeSelectMemo = React.memo(HomeSelect)
  const HomeLayoutMemo = React.memo(HomeLayout)

  return (
    <HomeLayoutMemo
      //Слайдер
      slider={
        <HomeSliderMemo
          pref={swiperRef}
        />
      }
      //Лист Преимуществ
      advantages={
        ADVANTAGES.map(item =>
          <HomeItemMemo
            img={item.img}
            text={item.text}
            title={item.title}
            key={item.id} />)

      }
      //Селект(НЕ кастом)
      select={
        <HomeSelectMemo setList={setList} list={list} />
      }

      //Товары
      market={
        MARKETPRODUCT[list].map(item =>
          <HomeProductMemo
            item={item}
            key={item.id}
            onClick={handleAddToMarket}
            market={market}
          />)

      }
      description={
        <HomeDescriptionMemo />
      }
      visit={
        <HomeVisitMemo />
      }
    />
  )
}

export default Home