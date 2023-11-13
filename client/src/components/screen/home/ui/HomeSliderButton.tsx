import { FC } from 'react';

interface IButtonSlider {
  children: string;
  state: 'left' | 'right';
  onClick: () => void;
}
const HomeSliderButton: FC<IButtonSlider> = ({ children, state, onClick }) => {



  return (
    <button
      className={{

        left: "flex basis-1/2 bg-inherit text-sm text-[#156963] bg-white pt-12 px-10 pb-3 relative after:absolute after:content-['Prev'] after:text-gray-500 after:top-2 after:left-20 lg:text-3xl pt-20 px-12 pb-9 md:text-xl pt-7 px-12 pb-3 after:top-0",

        right: "flex basis-1/2 grow-0 bg-[#156963] text-sm text-white  pt-12 px-10 pb-3 relative after:absolute after:content-['Next'] after:text-gray-500 after:top-2 after:left-20  md:text-xl pt-7 px-12 pb-3 after:top-0 lg:text-3xl pt-20 px-12 pb-9"

      }[state]}

      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}

export default HomeSliderButton