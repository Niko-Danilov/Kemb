'use client'

import { FC } from 'react'

import useHeaderState from './modal/useHeaderHook'
import HeaderBurger from './ui/HeaderBurger'
import HeaderLayout from './ui/HeaderLayout'
import HeaderLogo from './ui/HeaderLogo'
import HeaderModalAuth from './ui/HeaderModalAuth'
import HeaderModalMarket from './ui/HeaderModalMarket'
import HeaderModalRegistr from './ui/HeaderModalRegistr'
import HeaderModalSearch from './ui/HeaderModalSearch'
import HeaderNavigation from './ui/HeaderNavigation'


const Header: FC = () => {


  const { modalAuth, modalMarket, modalReg, modalSearch, burger, refs, handleBurgerClick, handleModalAuth, handleModalMarket, handleModalReg, handleModalSearch, handleSubmit, handlerClick, errors, onSubmit, register, reset, auth, deleteToMarket, handleSearch, market, search, searchItems, setAuth, massiveData, handleOut, handleDeleteToMarket } = useHeaderState()




  return (
    <HeaderLayout
      refs={refs}
      logo={
        <HeaderLogo />
      }
      navigation={
        <HeaderNavigation
          states={burger}
          handlerModalReg={handleModalReg}
          handlerModalAuth={handleModalAuth}
          handlerModalMarket={handleModalMarket}
          handlerModalSearch={handleModalSearch}
          marketQuery={massiveData}
          handlerOut={handleOut}
        />
      }
      burger={
        <HeaderBurger
          states={burger}
          handler={handleBurgerClick}
        />
      }
      modalReg={
        <HeaderModalRegistr
          isOpen={modalReg}
          onClose={handleModalReg}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          reset={reset}
        />
      }
      modalAuth={
        <HeaderModalAuth
          isOpen={modalAuth}
          onClose={handleModalAuth}
          authEmail={auth.email}
          authPassword={auth.password}
          setAuth={setAuth}
          handleForm={handlerClick}

        />
      }
      modalMarket={
        <HeaderModalMarket
          isOpen={modalMarket}
          onClose={handleModalMarket}
          market={market}
          onClick={handleDeleteToMarket}
          marketQuery={massiveData}
        />
      }
      modalSearch={
        <HeaderModalSearch
          isOpen={modalSearch}
          onClose={handleModalSearch}
          value={search}
          setSearch={handleSearch}
          items={searchItems}

        />
      }
    />
  )

}

export default Header

