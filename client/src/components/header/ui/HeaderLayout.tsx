import clsx from 'clsx'
import { FC, RefObject } from 'react'


interface IElement {
  logo: React.ReactElement
  navigation: React.ReactElement
  burger: React.ReactElement
  modalReg: React.ReactElement
  modalAuth: React.ReactElement
  modalMarket: React.ReactElement
  modalSearch: React.ReactElement
  refs: RefObject<HTMLDivElement>

}

const HeaderLayout: FC<IElement> = ({ logo, navigation, burger, modalReg, modalAuth, modalMarket, modalSearch, refs }) => {

  return (
    <>
      <header ref={refs} className='absolute top-0 left-0 w-full z-10'>
        <div className="max-w-[1193px] mx-auto px-3">
          <div className={clsx("w-full flex justify-between h-[100px] items-center", 'header')}>
            {logo}
            {navigation}
            {burger}
          </div>
        </div>
      </header>
      {modalReg}
      {modalAuth}
      {modalMarket}
      {modalSearch}
    </>
  )
}

export default HeaderLayout