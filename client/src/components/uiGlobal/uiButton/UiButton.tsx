import { FC } from 'react';



type IButton = {
  state: 'green' | 'white' | 'smallWhite' | '' | string;
  children: React.ReactNode;
  modal: 'Reg' | 'Auth' | 'Search' | 'onChange' | 'Market' | string,
  modalReg?: (e: React.MouseEvent<HTMLButtonElement>) => void
  modalAuth?: (e: React.MouseEvent<HTMLButtonElement>) => void
  modalMarket?: (e: React.MouseEvent<HTMLButtonElement>) => void
  modalSearch?: (e: React.MouseEvent<HTMLButtonElement>) => void
  out?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onChange?: () => void

}



const UiButton: FC<IButton> = ({ state, children, modalReg, modalAuth, modalMarket, modalSearch, modal, onChange, out }) => {
  return (
    <button
      className={{
        green: 'px-7 py-2 bg-inherit text-[#156963] font-bold leading-5 md: bg-white',
        white: 'px-7 py-2 bg-[#156963] text-cyan-100 font-bold leading-5',
        smallWhite: 'px-3 py-1 text-[8px] bg-[#156963] text-cyan-100 font-medium leading-3',
        '': 'text-xl'
      }[state]}
      onClick={{
        Auth: modalAuth,
        Reg: modalReg,
        Market: modalMarket,
        Search: modalSearch,
        onChange: onChange,
        out: out
      }[modal]}

    >
      {children}
    </button>
  )
}

export default UiButton