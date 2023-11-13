import UiButton from '@/components/uiGlobal/uiButton/UiButton'
import { useMarket } from '@/hooks/useMarket'
import clsx from 'clsx'
import { StaticImageData } from 'next/image'
import { FC } from 'react'
import { Menu, Menu2 } from './../const'
import style from './HeaderNavigation.module.scss'


interface IProduct {
  id: number,
  img: StaticImageData,
  title: string,
  price: string | number,
}

interface IElement {
  states: boolean,
  handlerModalReg: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handlerModalAuth: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handlerModalMarket: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handlerModalSearch: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handlerOut: (e: React.MouseEvent<HTMLButtonElement>) => void,
  marketQuery: IProduct[]
}

const HeaderNavigation: FC<IElement> = ({ states, handlerModalReg, handlerModalAuth, handlerModalMarket, handlerModalSearch, marketQuery, handlerOut }) => {

  const { market } = useMarket()

  return (
    <nav className={clsx(style.nav, states ? 'top-0' : '-top-[2000px]')} >
      <ul className='flex flex-col mt-14 gap-8 sm:flex-row items-center sm:mt-0 sm:gap-0'>
        {marketQuery === undefined ? Menu.map(item =>
          <li key={item.id} className='pl-0 last:pl-0 first:pl-0 sm:pl-5 sm:last:pl-0 sm:first:pl-0 '>
            <UiButton
              key={item.id}
              state={item?.state}
              modal={item?.modal}
              modalReg={handlerModalReg}
              modalAuth={handlerModalAuth}
              modalMarket={handlerModalMarket}
              modalSearch={handlerModalSearch}
            >
              {item.title}
              {/* {item.id === 1 ? <span>{marketQuery?.length}</span> : ''} */}
            </UiButton>
          </li>
        )
          :
          Menu2.map(item =>
            <li key={item.id} className='pl-0 last:pl-0 first:pl-0 sm:pl-5 sm:last:pl-0 sm:first:pl-0 '>
              <UiButton
                key={item.id}
                state={item?.state}
                modal={item?.modal}
                modalMarket={handlerModalMarket}
                modalSearch={handlerModalSearch}
                out={handlerOut}
              >
                {item.title}
                {item.id === 1 ? <span>{marketQuery?.length}</span> : ''}
              </UiButton>
            </li>
          )}
      </ul>
    </nav>

  )
}

export default HeaderNavigation