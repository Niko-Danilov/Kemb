import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'

interface IElement {
  states: boolean
  handler: (e: React.MouseEvent<HTMLDivElement>) => void
}

const HeaderBurger: FC<IElement> = ({ states, handler }) => {


  return (
    <div className='block fixed top-9 right-3 z-10 sm:hidden' onClick={handler}>

      {!states ?
        <RxHamburgerMenu size={24} />
        :
        <AiOutlineClose size={24} />
      }

      <span className='sr-only'>
        Открыть/закрыть мобильное меню
      </span>

    </div>
  )
}

export default HeaderBurger